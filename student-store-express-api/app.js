const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("tiny"))
app.use(express.json());

app.use(
    cors()
);

// Get endpoint

app.get("/", (_req, res) => {
    res.status(200).json({
        "ping" : "pong"
    })
})

// Routes

app.use("/store", require("./routes/store.routes"));

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