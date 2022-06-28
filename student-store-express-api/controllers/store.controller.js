controller = {}

// Model
const Store = require("../models/store");

controller.getProducts = (_req, res) => {
    res.status(200).json({
        products: Store.listProducts()
    })
}

controller.getProduct = (req, res) => {
    const {productId} = req.params;
    res.json({
        product: Store.fetchProduct(productId)
    })
}

controller.createOrder = (req, res) => {
    const { shoppingCart, user } = req.body;

    const purchase = Store.createOrder( {
        user,
        shoppingCart
    } );

    res.status(201).json({
        purchase
    })
}

module.exports = controller;
