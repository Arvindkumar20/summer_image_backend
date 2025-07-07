import express from "express";
 import cors from "cors";
import { imageRouter } from "./routes/image.route.js";
 const app=express();


app.get("/hello",(req,res)=>{
    res.json({msg:"hello world"});
})

const image={
    url:"shefs",
    author:"ehfuier",
    prompt:"gfuiefew fefewhf wfgs fwef ",
    date: Date.now()
}

app.get("/image",(req,res)=>{
    res.json(image);
});


app.use("/api",imageRouter);


 app.listen(3000,()=>{
console.log("server running on port " ,3000);
 });