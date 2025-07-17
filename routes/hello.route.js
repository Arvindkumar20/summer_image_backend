import express from "express";
import { createUser, getHello, updateUser } from "../controller/hello.js";

const router =express.Router();

router.get("/get-hello",getHello);
router.post("/create-user",createUser);
router.put("/update-user",updateUser);

export const helloRouter=router;