import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/multi-vendor-ecommerce');
        console.log('db connected !!!');
    } catch(err) {
        console.log('error while connecting');
    }
};

export default dbConnect;