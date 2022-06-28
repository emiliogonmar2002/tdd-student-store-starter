controller = {}

// Model
const Store = require("../models/store");

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

app.post("/store", (req, res) => {
    const { shoppingCart, user } = req.body;

    const purchase = Store.createOrder( {
        user,
        shoppingCart
    } );

    res.status(201).json({
        purchase
    })
})

module.exports = controller;
