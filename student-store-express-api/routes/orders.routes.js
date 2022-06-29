const express = require("express");
const router = express.Router();

// Controller
const { getOrders, getOrder } = require("../controllers/orders.controller");

router.get("/", getOrders);
router.get("/:orderId", getOrder);

module.exports = router;