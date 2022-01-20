import convmodel from "../models/conv.model.mjs";

// POST new conversation
const postNewConv = (req, res) => {
  const { usersID } = req.body;

  const newConv = new convmodel({ usersID });

  newConv.save((err, data) => {
    if (err) res.status(400).send(err);
    else res.status(201).send(data._id);
  });
};

// DELETE conversation

// GET all conversations from one specific user
const getAllConvsFromUser = () => console.log("all convs");

// GET all msgs from one specific conversation
// GET one specific conversation
const getAllMsgsFromConv = () => console.log("all msgs");

// GET one specific msg from one specific conversation
const getOneMsgFromConv = () => console.log("one msg");

// PATCH/PUT add msg to one specific conversation
const addMsgToConv = () => console.log("add msg");

export default { postNewConv, getAllConvsFromUser, getAllMsgsFromConv };
