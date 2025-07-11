import  express from "express";
import { generateImage, getHistory, greate } from "../controller/image.controller.js";

const router=express.Router();

router.post("/generate-image",generateImage);
router.get("/get-history",getHistory);
router.get("/update",getHistory);
router.get("/greate-msg",greate);

export const imageRouter=router;