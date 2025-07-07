import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});


export const Image = mongoose.model("Image", imageSchema);