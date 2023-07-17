import { Router } from 'express';

import { createNewProduct } from '../ctrls/api/products.js';

const router = Router();

// products
router.post('/products', createNewProduct);

export default router;