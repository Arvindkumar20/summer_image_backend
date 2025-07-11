import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


export const connectDb = async () => {
    try {
        const conneted = await mongoose.connect(process.env.MONGO_DB_URI);
        if (!conneted) {
            console.log("mongo db not connected");
            return;
        }
        console.log("mongo db connected succssfully");
        return;
    } catch (error) {
        console.log("error to connect mongo db ",error);
    }
}