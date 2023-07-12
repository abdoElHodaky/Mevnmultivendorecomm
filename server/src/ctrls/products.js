import Product from "../models/product.js";

const getAllProducts = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page-1) * limit;
    const collection = await Product.find().skip(skip).limit(limit).lean();
    
    const count = await Product.count();
    const numberOfPages = Math.ceil(count / limit);
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

const getProduct = async (req, res) => {

    const product = await Product.findOne({slug: req.params.slug}).lean();

    if(!product) return res.render('404', { layout: 'main' });

    return res.render('product', {
        title: req.params.slug,
        bodyClass: 'product',
        product,
        layout: 'main'
    });
}

export { getAllProducts, getProduct };