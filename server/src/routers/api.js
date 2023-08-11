/**
 * 
 * All guarded routes by Auth middleware must response with authedResponse.withRefreshToken(req, res)
 * 
 */

import { Router } from "express";

import { collection, createNewProduct, getProduct, updateProduct, deleteProduct } from "../ctrls/api/products.js";
import { signUp, signIn, profile, logout } from "../ctrls/api/users.js";

import isAuth from "../middleware/Auth.js";

const router = Router();

// products
router.get('/products/collection', isAuth, collection);
router.post('/products', isAuth, createNewProduct);
router.get('/products/:id', isAuth, getProduct);
router.patch('/products/:id', isAuth, updateProduct);
router.delete('/products/:id', isAuth, deleteProduct);

// users
router.post('/users/signup', signUp);
router.post('/users/signin', signIn);
router.get('/users/logout', logout);
router.get('/users/profile', isAuth, profile);

export default router;