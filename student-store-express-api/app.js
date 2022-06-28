const express = require("express");
const morgan = require("morgan");
const Store = require("./models/store");
const app = express();

app.use(morgan("tiny"))
app.use(express.json());

// Get endpoint

app.get("/", (_req, res) => {
    res.status(200).json({
        "ping" : "pong"
    })
})

app.get("/store", (_req, res) => {
    res.status(200).json({
        products: Store.listProducts()
    })
})

app.get("/store/:productId", (req, res) => {
    const {productId} = req.params;
    res.json({
        product: Store.fetchProduct(productId)
    })
})

// Error handlers

app.use((error, _req, res, _next) => {
    const status = error.status || 500;
    const message = error.message || "Something wen't wrong in the application";

    return res.status(status).json({
        error: {
            status,
            message
        }
    });
});

module.exports = app;