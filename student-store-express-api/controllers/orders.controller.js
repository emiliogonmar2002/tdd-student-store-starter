// Model
const Store = require("../models/store");

const controller = {};

controller.getOrders = (_req, res) => {
    res.status(200).json({
        orders: Store.listOrders()
    })
};

controller.getOrder = (req, res) => {
    const { orderId } = req.params;
    console.log("Hola")
    res.status(200).json({
        orders: Store.fetchOrder(orderId)
    })
};

module.exports = controller;