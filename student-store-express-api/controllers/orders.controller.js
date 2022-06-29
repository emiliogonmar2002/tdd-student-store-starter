// Model
const Store = require("../models/store");

const controller = {};

controller.getOrders = (_req, res) => {
    res.status(200).json({
        orders: Store.listOrders()
    })
};

module.exports = controller;