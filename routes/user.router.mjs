import express from "express";
const router = express.Router();

import user_controller from "../controllers/user.controller.mjs";

// GET all users
router.get("/all", user_controller.getAllUsers);

// GET one user
router.get("/one/:id", user_controller.getOneUser);

// PATCH/PUT user

// DELETE user

export default router;
