import express from "express";
const router = express.Router();

import user_controller from "../controllers/user.controller.mjs";

// GET all users (no lastname, no password)
router.get("/all", user_controller.getAllUsers);

// GET current user (no password)
router.get("/one/:id", user_controller.getOneUser);

// PUT current user (no password ?)
router.put("/modify/:id", user_controller.modifyOneUser);

// DELETE current user
router.delete("/delete/:id", user_controller.deleteOneUser);

export default router;
