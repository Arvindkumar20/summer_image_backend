import { history as data } from "../data.js";

export const fetchTestData = async (req, res) => {


    res.json({
        message: "data fetched successfully",
        data
    });
    // res.json({ message: "hello" });
}


export const createImage=async(req,res)=>{
const {url,author,prompt,date}=req.body;
const image={
    url,
    author,
    prompt,
    date
}

data.push(image);
return res.json({
    message:"image created successfully",
    data
});
}



export const updateData = async (req, res) => {
    const {url ,author,date,prompt}=req.body;
        const image = {
        url: "https://my.alfred.edu/zoom/_images/foster-lake.jpg",
        author: "update",
        prompt: "update",
        date: "10/07/2025"
    }

    data.push(image);
    return res.json({
        message: "data updated successfully",
        data
    });
}