/**
 * 
 * All guarded routes by Auth middleware must response with authedResponse.withRefreshToken(req, res)
 * 
 */

import { Router } from "express";

import { collection, 
    createNewProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct,
    productsImagesCollection,
    uploadProductImage,
    updateProductImage,
    deleteProductImage } from "../ctrls/api/products.js";
    
import { signUp, 
    signIn, 
    profile, 
    logout,
    sendVerificationMail,
    verifyEmail, 
    changePassword, 
    passwordForgot, 
    passwordReset } from "../ctrls/api/users.js";

import isAuth from "../middleware/Auth.js";

import { productImageUploader } from "../utils/imageUpload.js";

const router = Router();

// products
router.get('/products/collection', isAuth, collection);
router.post('/products', isAuth, createNewProduct);
router.get('/products/:id', isAuth, getProduct);
router.patch('/products/:id', isAuth, updateProduct);
router.delete('/products/:id', isAuth, deleteProduct);
router.get('/products/collection/images', isAuth, productsImagesCollection);
router.post('/products/images', isAuth, productImageUploader, uploadProductImage);
router.patch('/products/images/:id', isAuth, updateProductImage);
router.delete('/products/images/:id', isAuth, deleteProductImage);

// users
router.post('/users/signup', signUp);
router.post('/users/signin', signIn);
router.get('/users/logout', logout);
router.get('/users/profile', isAuth, profile);
router.get('/users/email-verify', isAuth, sendVerificationMail);
router.post('/users/email-verify', verifyEmail);
router.post('/users/password-change', isAuth, changePassword);
router.post('/users/password-forgot', passwordForgot);
router.post('/users/password-reset', passwordReset);

export default router;