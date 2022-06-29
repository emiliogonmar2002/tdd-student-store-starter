const express = require("express");
const router = express.Router();

// Controller
const { getOrders } = require("../controllers/orders.controller");

router.get("/", getOrders);

module.exports = router;