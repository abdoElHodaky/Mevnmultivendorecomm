import { Router } from "express";

import { createNewProduct } from "../ctrls/api/products.js";
import { signUp } from "../ctrls/api/users.js";

const router = Router();

// products
router.post('/products', createNewProduct);

// users
router.post('/users', signUp);

export default router;