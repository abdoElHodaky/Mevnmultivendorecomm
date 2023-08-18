import mongoose from "mongoose";

const productImageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: null
    },
    name: {
        type: String,
        required: true,
        maxLength: 255,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        maxLength: 255,
        lowercase: true,
        trim: true,
        default: ""
    }
});

const ProductImage = mongoose.model('ProductImage', productImageSchema);

export default ProductImage;