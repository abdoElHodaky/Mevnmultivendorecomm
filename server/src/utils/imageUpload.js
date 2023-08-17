import multer from "multer";
import { existsSync, mkdirSync } from "fs";

import { __dirname, join } from "./paths.js";

// product image uploader
const productImgStorage = multer.diskStorage({
    destination: (req, file, cb) => {

        const workingDir = join(__dirname, `../../public/common/images/${req.user.firstName}`);

        if(!existsSync(workingDir)) mkdirSync(workingDir);

        cb(null, workingDir);
    },
    filename: (req, file, cb) => {

        const ext = file.mimetype.split('/')[1];

        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    }
});
const productImageUploader = multer({storage: productImgStorage}).single('product');

export { productImageUploader };