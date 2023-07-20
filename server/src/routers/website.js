import { Router } from "express";

import { renderAllProducts, renderProduct } from "../ctrls/website/products.js";

const router = Router();

// home page
router.get('/', (_, res) => {
    return res.render('index', {
        title: 'welcome',
        layout: 'main'
    });
});

// products pages
router.get('/products', renderAllProducts);
router.get('/products/:slug', renderProduct);

// about page
router.get('/about', (_, res) => {
    return res.render('about', {
        title: 'about',
        layout: 'main'
    });
});

// 404
router.all('*', (_, res)=>{
    return res.render('404', {
        layout: 'main'
    });
});

export default router;