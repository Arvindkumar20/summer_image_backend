import  express from "express";
import { deleteImage, generateImage, getHistory,  updateImage } from "../controller/image.controller.js";

const router=express.Router();

router.post("/generate-image",generateImage);
router.get("/get-history",getHistory);
router.put("/update/:id",updateImage);
router.delete("/delete/:id",deleteImage);

export const imageRouter=router;