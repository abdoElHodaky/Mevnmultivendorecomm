import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        maxLength: 255,
        lowercase: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        maxLength: 50,
        lowercase: true,
        trim: true
    },
    valid: {
        type: Boolean,
        default: true
    },
    userAgent: {
        type: String,
        required: true,
        maxLength: 50,
        lowercase: true,
        trim: true
    },
    ip: {
        type: String,
        required: true,
        maxLength: 50,
        lowercase: true,
        trim: true
    }
}, { timestamps: true });

const Session = mongoose.model('Session', sessionSchema);

export default Session;