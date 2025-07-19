import cloudinary from "../config/cloudinary.js";
import { Image } from "../models/image.js";
import generate from "../utils/generate.js";

// Assuming this returns a public image URL

export const generateImage = async (req, res) => {
    const { author, prompt } = req.body;

    if (!author || !prompt) {
        return res.status(400).json({
            message: "Author and prompt are required",
        });
    }

    try {
        // 🔄 Generate image using your AI service
        const generatedUrl = await generate(prompt);
        if (!generatedUrl) {
            return res.status(500).json({
                message: "Failed to generate image. Try again later.",
            });
        }

        // ☁️ Upload to Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(generatedUrl, {
            folder: "imagepig_images",
        });

        if (!cloudinaryResponse?.secure_url||cloudinaryResponse==null) {
            return res.status(500).json({
                message: "Image upload to Cloudinary failed",
            });
        }

        // 💾 Save to DB
        const image = await Image.create({
            url: cloudinaryResponse.secure_url,
            author,
            prompt,
        });

        
        return res.status(201).json({
            message: "Image generated and uploaded successfully",
            image,
        });

    } catch (error) {
        console.error("Error in generateImage:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


export const getHistory = async (req, res) => {
    let history;
    try {
        history = await Image.find({});
    } catch (error) {
        return res.json(error);
    }

    if (!history) {
        return res.json({
            message: "history not fetched"
        });
    }

    return res.json({
        message: "history fetched",
        history: history.reverse()
    })
}

export const updateImage = async (req, res) => {
    const { id } = req.params;

    const { url, author, prompt } = req.body;
    if (!url || !author || !prompt) {
        return res.json({
            message: "All fields are required"
        });
    }


    if (!id) {
        return res.json({
            message: "id is required"
        });
    }

    let image;
    try {
        image = await Image.findByIdAndUpdate({ _id: id }, {
            url: url,
            author: author,
            prompt: prompt
        });

    } catch (error) {
        return res.json(error)
    }

    if (!image) {
        return res.json({
            message: "image not updated"
        });
    }

    return res.json({
        message: "image updated",
        image

    })
}

// delete image 
export const deleteImage = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.json({
            message: "id is required"
        });
    }
    let image;
    try {
        image = await Image.findByIdAndDelete({ _id: id });

    } catch (error) {
        return res.json(error);
    }
    if (!image) {
        return res.json({
            message: "image not deleted"
        });
    }


    return res.json({
        message: "image deleted",
        image
    })


}