const { storage } = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Store {
    // Core
    static listProducts() {
        try {
            return storage.get("products").value();
        } catch (error) {
            throw new BadRequestError(error);
        }
    }

    static fetchProduct(id) {
        try {
            return storage.get("products").find({ id: Number(id) }).value();
        } catch (error) {
            throw new BadRequestError(error);
        }
    }

    static createOrder( {
        shoppingCart,
        user
    } ) {
        try {
            // Check if undefined
            if (!shoppingCart || !user) throw new BadRequestError();

            // Find duplicates
            const valuesSet = new Set(shoppingCart.map(value => value.itemId));
            if (valuesSet.size !== shoppingCart.length) throw new BadRequestError(); // Error 400

            // Calculate total
            const total = 0;
            shoppingCart.map(() => {
                const { quantity, itemId } = shoppingCart[i];
            if (!quantity || !itemId) throw new BadRequestError(); // Error 400

            })

            // Add taxes
            total *= 1.0875;

            // Generate purchase
            const purchase = {
             id: storage.get("purchases").value().length + 1,
             name: user.name,
             email: user.email,
             order: shoppingCart,
             total,
             createdAt: new Date().toString(),
             receipt: `Receipt #${storage.get("purchases").value().length + 1}, by user: ${user.name}. Total price: $${total}`
            }

            storage.get("purchases").push(purchase);
            return purchase;
        } catch (error) {
            throw new BadRequestError(error);
        }
    }
}

module.exports = Store;