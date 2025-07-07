import  express from "express";
import { generateImage, getHistory } from "../controller/image.controller.js";

const router=express.Router();

router.post("/generate-image",generateImage)
router.get("/get-history",getHistory)

export const imageRouter=router;