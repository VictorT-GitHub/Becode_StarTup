import express from "express";
const router = express.Router();

import auth_controller from "../controllers/auth.controller.mjs";

// POST REGISTER new user
router.post("/register", auth_controller.postNewUser);

// POST LOGIN

// GET LOGOUT

export default router;
