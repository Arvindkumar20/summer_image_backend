import express from "express";
import { hello } from "../controller/hello.js";

const router =express.Router();

router.get("/hello",hello);

export const helloRouter=router;