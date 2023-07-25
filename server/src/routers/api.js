import { Router } from "express";

import { createNewProduct } from "../ctrls/api/products.js";
import { signUp, signIn } from "../ctrls/api/users.js";

const router = Router();

// products
router.post('/products', createNewProduct);

// users
router.post('/users/signup', signUp);
router.post('/users/signin', signIn);

export default router;