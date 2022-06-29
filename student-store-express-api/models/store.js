const { storage } = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Store {
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
            if (!shoppingCart || !user) throw new BadRequestError("Post needs shopping cart and user");

            // Check if it has all the correct info
            shoppingCart.map( (item, index) => {
                let { quantity, itemId } = shoppingCart[index];
                if (!quantity || !itemId) throw new BadRequestError("Post needs itemId and quantity"); // Error 400
            })

            // Find duplicates
            const valuesSet = new Set(shoppingCart.map(value => value.itemId));

            if (valuesSet.size < shoppingCart.length) throw new BadRequestError("Duplicated values!"); // Error 400

            // Calculate total
            let total = 0;
            shoppingCart.map((item, index) => {
                total += shoppingCart[index].quantity * Store.fetchProduct(shoppingCart[index].itemId).price;
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

            storage.get("purchases").push(purchase).write();
            return purchase;
        } catch (error) {
            throw new BadRequestError(error);
        }
    }

    static listOrders() {
        try {
            return storage.get("purchases").value();
        } catch (error) {
            throw new BadRequestError(error);
        }
    }

    static fetchOrder(id) {
        try {
            return storage.get("purchases").find({ id: Number(id) }).value();
        } catch (error) {
            throw new BadRequestError(error);
        }
    }
}

module.exports = Store;