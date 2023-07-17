import mongoose from "mongoose";

const productFeatureSchema = new mongoose.Schema({
    text: {
        type: String,
        maxLength: 255,
        lowercase: true,
        trim: true
    }
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255,
        lowercase: true,
        trim: true
    },
    slug: {
        type: String,
        maxLength: 255,
        lowercase: true,
        trim: true
    },
    thumbnail: {
        type: String,
        maxLength: 255,
        lowercase: true,
        trim: true,
        default: '225x225.svg'
    },
    features: {
        type: [productFeatureSchema],
        validate: [
            function(features) {
                return features.length >= 1
            },
            "min features number is 1"
        ]
    },
    description: {
        type: String,
        required: true,
        maxLength: 255,
        lowercase: true,
        trim: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true,
        max: 100000,
    },
    instock: {
        type: Boolean,
        default: true
    },
    freeShipping: {
        type: Boolean,
        default: true
    },
    avgRating: {
        amount: {
            type: Number,
            default: 4.5,
            min:1,
            max:5
        },
        numOfRating:{
            type: Number,
            default: 0,
            min:0,
        }
    },
    lang: {
        type: String,
        default: 'en',
        enum: ['en', 'ar'],
        lowercase: true,
        trim: true
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;