import multer from "multer";

import { __dirname, join } from "./paths.js";

// product image uploader
const productImgStorage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, join(__dirname, '../../public/common/images/products'));
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    }
});
const productImageUploader = multer({storage: productImgStorage}).single('product');

export { productImageUploader };