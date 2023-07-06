import Product from "../models/product.js";

const getAllProducts = async (_, res) => {

    const collection = await Product.find().lean();

    return res.render('products', {
        title: 'products',
        products: collection,
        layout: 'main'
    });
};

export { getAllProducts };