import express from "express";
const router = express.Router();

import conv_controller from "../controllers/conv.controller.mjs";

// POST new conversation
router.post("/add-conv", conv_controller.postNewConv);

// DELETE conversation

// GET all conversations from one specific user
router.get("/", conv_controller.getAllConvsFromUser);

// GET all msgs from one specific conversation
router.get("/one/:id", conv_controller.getAllMsgsFromConv);

// GET one specific msg from one specific conversation

// PATCH/PUT add msg to one specific conversation

export default router;
