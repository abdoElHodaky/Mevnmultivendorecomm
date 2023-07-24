import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 50,
        lowercase: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50,
        lowercase: true,
        trim: true
    },
    email: {
        address: {
            type: String,
            match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            unique: true,
            maxLength: 50,
            lowercase: true,
            trim: true
        },
        verified: {
            type: Boolean,
            default: false
        }
    },
    password: {
        type: String,
        required: true,
        maxLength: 16,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    accountStatus: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive'],
        lowercase: true,
        trim: true
    },
    avatar: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvvbFRDiGafT0jv4FFSmirNyaLuQ_obm_P8JMel822HZeVWimCbRf8rh71cc&s'
    },
    currentBalance: {
        type: Number,
        default: 0
    },
    appPreferences: {
        mode: {
            type: String,
            default: 'light',
            enum: ['light', 'dark'],
            lowercase: true,
            trim: true
        },
        lang: {
            type: String,
            default: 'en',
            enum: ['en', 'ar'],
            lowercase: true,
            trim: true
        }
    }
});

userSchema.pre('save', async function(next) {

    if(!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);

export default User;