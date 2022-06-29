const express = require("express");
const router = express.Router();

// Controller
const { getOrder, getOrders } = require("../controllers/order.controller");

router.get("/", getOrders);

module.exports = router;