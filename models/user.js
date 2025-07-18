import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        minLength: 10,
        maxLength: 10,
        required: true
    },
    address: {
        type: String,
        required: true

    }
}, { timestamps: true });

export const User = mongoose.model("user", userSchema);