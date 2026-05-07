import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoDBUrl = process.env.MONGODB_CON;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDBUrl);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;