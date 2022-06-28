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
}

module.exports = Store