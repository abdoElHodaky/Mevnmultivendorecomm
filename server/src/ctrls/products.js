import Product from "../models/product.js";

const getAllProducts = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page-1) * limit;
    const collection = await Product.find().skip(skip).limit(limit).lean();
    
    const count = await Product.count();
    const numberOfPages = count / limit;
    const prevPage = Math.max(page - 1, 1);
    const nextPage = Math.min(page + 1, count);

    return res.render('products', {
        title: 'products',
        bodyClass: 'products',
        products: collection,
        pagination: { page, count, numberOfPages, prevPage, nextPage },
        layout: 'main'
    });
};

export { getAllProducts };