import { Router } from "express";

import { createNewProduct } from "../ctrls/api/products.js";
import { signUp, signIn, profile } from "../ctrls/api/users.js";

import isAuth from "../middleware/Auth.js";

const router = Router();

// products
router.post('/products', createNewProduct);

// users
router.post('/users/signup', signUp);
router.post('/users/signin', signIn);
router.get('/users/profile', isAuth, profile);

export default router;