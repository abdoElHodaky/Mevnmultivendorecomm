import { object, string, array } from "yup";

import Product from "../../models/product.js";
import AsyncMiddleware from "../../middleware/AsyncMiddleware.js";
import inputsValidation from "../../utils/inputsValidation.js";

const newProductSchema = object({
    name: string().required("product_name_required"),
    description: string().required("product_description_required"),
    features: array().of(
        object().shape({
            text: string().required("feature_description_required")
        })
    ).min(1),
    price: string().required("product_price_required")
});

const createNewProduct = AsyncMiddleware(async(req, res, next) => {

    await inputsValidation(newProductSchema, req.body, next);

    const product = new Product(req.body);

    const newProduct = await product.save();

    res.status(200).send(newProduct);

});

export { createNewProduct };