const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"))
app.use(express.json());

// Get endpoint

app.get("/", (_req, res) => {
    res.status(200).json({
        "ping" : "pong"
    })
})

module.exports = app;