import express from "express";
const router = express.Router();

import user_controller from "../controllers/user.controller.mjs";

// GET all users (no lastname, no password)
router.get("/all", user_controller.getAllUsers);

// GET one user

// PATCH/PUT user

// DELETE user

export default router;
