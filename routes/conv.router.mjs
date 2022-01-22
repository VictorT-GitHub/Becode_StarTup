import express from "express";
const router = express.Router();

import conv_controller from "../controllers/conv.controller.mjs";

// POST new conversation
router.post("/add-conv", conv_controller.postNewConv);

// DELETE conversation

// GET all conversations from current user
router.get("/all", conv_controller.getAllConvsFromUser);

// GET one conversation from current user
router.get("/one/:id", conv_controller.getOneConvFromUser);

// GET one msg from one conversation from current user

// PATCH/PUT add msg to one conversation
router.put("/add-msg/:id", conv_controller.addMsgToConv);

export default router;
