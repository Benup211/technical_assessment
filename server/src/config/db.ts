import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "");
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}