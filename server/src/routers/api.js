/**
 * 
 * All guarded routes by Auth middleware must use authedResponse.withRefreshToken(req, res)
 * 
 */

import { Router } from "express";

import { createNewProduct } from "../ctrls/api/products.js";
import { signUp, signIn, profile, logout } from "../ctrls/api/users.js";

import isAuth from "../middleware/Auth.js";

const router = Router();

// products
router.post('/products', createNewProduct);

// users
router.post('/users/signup', signUp);
router.post('/users/signin', signIn);
router.get('/users/logout', logout);
router.get('/users/profile', isAuth, profile);

export default router;