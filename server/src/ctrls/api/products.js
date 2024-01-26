import { object, string, number, array } from "yup";
import { readdir, unlink } from 'fs';

import Product from "../../models/product.js";
import ProductImage from "../../models/productImage.js";

import AsyncMiddleware from "../../middleware/AsyncMiddleware.js";

import inputsValidation from "../../utils/inputsValidation.js";
import authedResponse from "../../utils/authedResponse.js";
import doPagination from "../../utils/doPagination.js";
import { __dirname, join } from "../../utils/paths.js";

import AppError from "../../parts/AppError.js";

const newProductSchema = object({
    name: string().required("product_name_required"),
    description: string().required("product_description_required"),
    features: array().of(
        object().shape({
            text: string().required("feature_description_required")
        })
    ).min(1),
    thumbnail: string(),
    price: number().required("product_price_required")
}).noUnknown(true).strict(true);

const updateProductSchema = object({
    name: string(),
    description: string(),
    features: array().of(
        object().shape({
            text: string()
        })
    ).min(1),
    thumbnail: string(),
    price: number()
}).noUnknown(true).strict(true);

const updateProductImageSchema = object({
    productId: string(),
    description: string()
});

const browse = AsyncMiddleware( async(req, res, next) => {

    const { skip, limit } = doPagination(req.query.page, req.query.limit);

    const products = await Product.find().skip(skip).limit(limit).sort({_id: -1});

    return res.status(200).send(products)
})

const collection = AsyncMiddleware(async(req, res, next) => {

    const { skip, limit } = doPagination(req.query.page, req.query.limit);

    const products = await Product.find({userId: req.user._id}).skip(skip).limit(limit).sort({_id: -1});

    return authedResponse.withRefreshToken(req, res, products);
});

const createNewProduct = AsyncMiddleware(async(req, res, next) => {

    const valid = await inputsValidation(newProductSchema, req.body, next);
    if(!valid) return;

    const product = new Product({userId: req.user._id, ...req.body});

    const newProduct = await product.save();

    return authedResponse.withRefreshToken(req, res, newProduct);
});

const getProduct = AsyncMiddleware(async(req, res, next) => {

    const product = await Product.findOne({_id: req.params.id});

    if(!product) return next(new AppError({message: 'product_not_found'}, 404));

    return authedResponse.withRefreshToken(req, res, product);
});

const updateProduct = AsyncMiddleware(async(req, res, next) => {

    if(Object.keys(req.body).length === 0) return next(new AppError({message: 'at_least_one_attribute'}, 400));

    const valid = await inputsValidation(updateProductSchema, req.body, next);
    if(!valid) return;
    
    const product = await Product.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, {...req.body}, {new: true});

    if(!product) return next(new AppError({message: 'product_not_found'}, 404));

    return authedResponse.withRefreshToken(req, res, product);
});

const deleteProduct = AsyncMiddleware(async(req, res, next) => {

    const product = await Product.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

    if(!product) return next(new AppError({message: 'product_not_found'}, 404));

    return authedResponse.withRefreshToken(req, res, product);
});

const productsImagesCollection = AsyncMiddleware(async(req, res, next) => {

    const { skip, limit } = doPagination(req.query.page, req.query.limit);

    const collection = await ProductImage.find({userId: req.user._id}).skip(skip).limit(limit).sort({_id: -1});
    
    return authedResponse.withRefreshToken(req, res, collection);
});

const uploadProductImage = AsyncMiddleware(async(req, res, next) => {

    if(!req.file) return next(new AppError({message: 'image_is_required'}));

    const valid = await inputsValidation(updateProductImageSchema, req.body, next);
    if(!valid) return;

    const productImage = new ProductImage({
        userId: req.user._id, 
        name: req.file.filename, 
        description: req.body.description || ""
    });

    const uploadedProductImage = await productImage.save();

    return authedResponse.withRefreshToken(req, res, uploadedProductImage);
});

const updateProductImage = AsyncMiddleware(async(req, res, next) => {

    if(Object.keys(req.body).length === 0) return next(new AppError({message: 'at_least_one_attribute'}, 400));
    
    const valid = await inputsValidation(updateProductImageSchema, req.body, next);
    if(!valid) return;

    if(req.body.productId) {

        const product = await Product.findOne({ _id: req.body.productId, userId: req.user._id});

        if(!product) return next(new AppError({message: 'product_not_found'}, 404));
    }

    const productImage = await ProductImage.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, {...req.body}, {new: true});

    return authedResponse.withRefreshToken(req, res, productImage);
});

const deleteProductImage = AsyncMiddleware(async(req, res, next) => {

    const productImage = await ProductImage.findOneAndDelete({ _id: req.params.id, userId: req.user._id});

    if(!productImage) return next(new AppError({message: 'product_image_not_found'}, 404));

    const workingDir = join(__dirname, `../../public/common/images/${req.user.firstName}`);

    readdir(workingDir, (errs, files) => {
        
        files.forEach( file => {

            const filePath = join(workingDir, file);

            if(file === productImage.name) unlink(filePath, ()=>{});
        });
    });

    return authedResponse.withRefreshToken(req, res, productImage);
});

export { createNewProduct, 
    collection, 
    getProduct, 
    updateProduct, 
    deleteProduct,
    productsImagesCollection,
    uploadProductImage,
    updateProductImage,
    deleteProductImage, 
    browse };