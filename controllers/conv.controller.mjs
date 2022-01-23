import mongoose from "mongoose";

import convmodel from "../models/conv.model.mjs";
import JOIvalidation from "../validation/validation.mjs";

// ------ CRUD CONVERSATION ------
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
// !! WORK IN PROGRESS !! et jsais pas du tout comment faire x)
const deleteNewConv = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Conversation id unknow: " + req.params.id);

  convmodel.findOneAndDelete(
    { usersID: { $all: [res.locals.user_id] }, _id: req.params.id },
    (err, docs) => {
      if (err) res.status(400).send("Delete conversation Error: " + err);
      else res.status(200).send(docs);
    }
  );
};

// GET all conversations (from current user)
const getAllConvsFromUser = (req, res) => {
  // $all select docs where the array-field contains all values specified
  convmodel.find({ usersID: { $all: [res.locals.user_id] } }, (err, docs) => {
    if (err) res.status(400).send("Get user conversations ERROR: " + err);
    else res.status(200).send(docs);
  });
};

// GET one conversation (from current user)
const getOneConvFromUser = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Conversation id unknow: " + req.params.id);

  // $all select docs where the array-field contains all values specified
  convmodel.find(
    { usersID: { $all: [res.locals.user_id] }, _id: req.params.id },
    (err, docs) => {
      if (err) res.status(400).send("Get conversation ERROR: " + err);
      else res.status(200).send(docs);
    }
  );
};

// ------ CRUD MESSAGE ------
// GET one msg (from one conversation from current user)
const getOneMsg = (req, res) => {
  // ObjectId validations
  if (!mongoose.Types.ObjectId.isValid(req.params.conv_id))
    return res
      .status(400)
      .send("Error conversation id unknow: " + req.params.conv_id);

  if (!mongoose.Types.ObjectId.isValid(req.params.msg_id))
    return res
      .status(400)
      .send("Error message id unknow: " + req.params.msg_id);

  // Select the conversation
  convmodel.findOne(
    { usersID: { $all: [res.locals.user_id] }, _id: req.params.conv_id },
    (err, conv) => {
      if (err) return res.status(400).send("Get message Error: " + err);
      if (!conv) return res.status(404).send("Conversation not found");

      // Select the message
      const message = conv.messages.find((msg) => msg._id == req.params.msg_id);
      if (!message) return res.status(404).send("Message not found");

      // Return the message data
      return res.status(200).send(message);
    }
  );
};

// PUT add msg (to one conversation from current user)
const addOneMsg = (req, res) => {
  // ObjectId validation
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send("Error conversation id unknow: " + req.params.id);

  // JOI validation
  const { error } = JOIvalidation.messageCheck(req.body);
  if (error)
    return res
      .status(400)
      .send("Put new message Error: " + error.details[0].message);

  // New message
  const newMsg = {
    messages: {
      authorID: res.locals.user_id,
      text: req.body.text,
    },
  };

  // FindOneAndUpdate
  convmodel.findOneAndUpdate(
    { usersID: { $all: [res.locals.user_id] }, _id: req.params.id },
    { $push: newMsg },
    { new: true },
    (err, docs) => {
      if (err) res.status(400).send("Put new message Error: " + err);
      else res.status(200).send(docs);
    }
  );
};

// PUT modify one msg (from conversation from current user)
const modifyOneMsg = (req, res) => {
  // ObjectId validations
  if (!mongoose.Types.ObjectId.isValid(req.params.conv_id))
    return res
      .status(400)
      .send("Error conversation id unknow: " + req.params.conv_id);

  if (!mongoose.Types.ObjectId.isValid(req.params.msg_id))
    return res
      .status(400)
      .send("Error message id unknow: " + req.params.msg_id);

  // JOI text msg valiation
  const { error } = JOIvalidation.messageCheck(req.body);
  if (error)
    return res
      .status(400)
      .send("Modify message Error: " + error.details[0].message);

  // Select the conversation
  convmodel.findOne(
    { usersID: { $all: [res.locals.user_id] }, _id: req.params.conv_id },
    (err, conv) => {
      if (err) return res.status(400).send("Modify message Error: " + err);
      if (!conv) return res.status(404).send("Conversation not found");

      // Select the message
      const message = conv.messages.find((msg) => msg._id == req.params.msg_id);
      if (!message) return res.status(404).send("Message not found");

      // Check if message is owned by current user, if not he cant edit it
      if (message.authorID != res.locals.user_id)
        return res.status(401).send("Error: You can only modify your messages");

      // Edit the message
      message.text = req.body.text;

      // Saves the conversation with the updated message
      return conv.save((err) => {
        if (err) return res.status(400).send("Modify message Error: " + err);
        return res.status(200).send(conv);
      });
    }
  );
};

// PUT delete one msg (from conversation from current user)
const deleteOneMsg = (req, res) => {
  // ObjectId validations
  if (!mongoose.Types.ObjectId.isValid(req.params.conv_id))
    return res
      .status(400)
      .send("Error conversation id unknow: " + req.params.conv_id);

  if (!mongoose.Types.ObjectId.isValid(req.params.msg_id))
    return res
      .status(400)
      .send("Error message id unknow: " + req.params.msg_id);

  // Message to delete
  const msgToDelete = {
    messages: {
      _id: req.params.msg_id,
      authorID: res.locals.user_id,
    },
  };

  // FindOneAndUpdate
  convmodel.findOneAndUpdate(
    { usersID: { $all: [res.locals.user_id] }, _id: req.params.conv_id },
    { $pull: msgToDelete },
    { new: true },
    (err, docs) => {
      if (err) res.status(400).send("Delete message Error: " + err);
      else res.status(200).send(docs);
    }
  );
};

export default {
  postNewConv,
  deleteNewConv,
  getAllConvsFromUser,
  getOneConvFromUser,
  getOneMsg,
  addOneMsg,
  modifyOneMsg,
  deleteOneMsg,
};
