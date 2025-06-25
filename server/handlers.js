import { Product, User } from "../db/model.js";

const handlers = {
    getProducts: async (req, res) => {
        const products = await Product.findAll()
        console.log("BACKEND:", products)
        res.json(products)
    }
}

export default handlers;