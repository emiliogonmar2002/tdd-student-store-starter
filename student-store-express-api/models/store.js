const { storage } = require("../data/storage");

class Store {
    // Core
    static listProducts() {
        try {
            return storage.get("products").value();
        } catch (error) {
            throw new BadRequestError(error);
        }
    }
}

module.exports = Store