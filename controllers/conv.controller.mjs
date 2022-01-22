import mongoose from "mongoose";

import convmodel from "../models/conv.model.mjs";
import JOIvalidation from "../validation/validation.mjs";

// POST new conversation
const postNewConv = (req, res) => {
  if (!req.body.userID)
    return res.status(400).send("Error: 'userID' is required");

  const newConv = new convmodel({
    usersID: [req.body.userID, res.locals.user_id],
  });

  newConv.save((err, docs) => {
    if (err) res.status(400).send("Post new conversation ERROR: " + err);
    else res.status(201).send(docs);
  });
};

// DELETE (this new) conversation (if not used)
const deleteNewConv = (req, res) => {};

// GET all conversations from current user
const getAllConvsFromUser = (req, res) => {
  // $all select docs where the array-field contains all values specified
  convmodel.find({ usersID: { $all: [res.locals.user_id] } }, (err, docs) => {
    if (err) res.status(400).send("Get user conversations ERROR: " + err);
    else res.status(200).send(docs);
  });
};

// GET one conversation from current user
const getOneConvFromUser = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send("Error conversation id unknow: " + req.params.id);

  // $all select docs where the array-field contains all values specified
  convmodel.find(
    { usersID: { $all: [res.locals.user_id] }, _id: req.params.id },
    (err, docs) => {
      if (err) res.status(400).send("Get conversation ERROR: " + err);
      else res.status(200).send(docs);
    }
  );
};

// GET one msg from one conversation from current user
// (res.locals.user_id + /:convid/:msgid) + objectid validation
const getOneMsgFromConv = (req, res) => {};

// PATCH/PUT add msg to one conversation
// (res.locals.user_id + /:convid)
const addMsgToConv = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send("Error conversation id unknow: " + req.params.id);
};

export default {
  postNewConv,
  deleteNewConv,
  getAllConvsFromUser,
  getOneConvFromUser,
  getOneMsgFromConv,
  addMsgToConv,
};
