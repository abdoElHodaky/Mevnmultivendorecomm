import Product from "../../models/product.js";
import AsyncMiddleware from "../../middleware/AsyncMiddleware.js";

const createNewProduct = AsyncMiddleware(async(req, res) => {

    const product = new Product(req.body);

    const newProduct = await product.save();

    res.status(200).send(newProduct);

});

export { createNewProduct };