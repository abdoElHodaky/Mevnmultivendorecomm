import { Router } from 'express';

import { getAllProducts } from '../ctrls/products.js';

const router = Router();

// home page
router.get('/', (_, res) => {
    res.render('index', {
        title: 'welcome',
        layout: 'main'
    });
});

// products page
router.get('/products', getAllProducts);

// about page
router.get('/about', (_, res) => {
    res.render('about', {
        title: 'about',
        layout: 'main'
    });
});

export default router;