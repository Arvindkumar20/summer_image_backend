import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controller/hello.js";

const router = express.Router();

router.get("/get-user", getUsers);
router.post("/create-user", createUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

export const helloRouter = router;