import { Image } from "../models/image.js";

export const generateImage = (req, res) => {

    const { url, author, prompt } = req.body;

    if (!url || !author || !prompt) {
        return res.json({
            message: "All fields are required"
        });
    }

    let image;
    try {
        image = Image.create({
            url,
            author,
            prompt
        });

    } catch (error) {
        return res.json(error);
    }

    if (!image) {
        return res.json({
            message: "Image not generated please try again"
        });
    }

    return res.json({
        message: "image generated",
        image
    })
}


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