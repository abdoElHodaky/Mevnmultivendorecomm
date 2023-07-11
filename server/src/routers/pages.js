import { Router } from 'express';

import { getAllProducts, getProduct } from '../ctrls/products.js';

const router = Router();

// home page
router.get('/', (_, res) => {
    return res.render('index', {
        title: 'welcome',
        layout: 'main'
    });
});

// products pages
router.get('/products', getAllProducts);
router.get('/products/:slug', getProduct);

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