import express from "express";
import { createImage, fetchTestData, updateData } from "../controller/test.controller.js";

const router=express.Router();
router.get("/test",fetchTestData);
router.put("/update",updateData);
router.post("/create-image",createImage);

export const testRouter=router;

