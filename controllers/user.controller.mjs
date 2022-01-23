import usermodel from "../models/user.model.mjs";

// GET all users (no lastname, no password)
const getAllUsers = (req, res) => {
  usermodel
    .find((err, docs) => {
      if (err) res.send(err);
      else res.send(docs);
    })
    .select("-__v -password -lastname -updatedAt");
};

// GET current user (no password)
const getOneUser = (req, res) => {};

// PUT current user (no password ?)
const modifyOneUser = (req, res) => {};

// DELETE current user
const deleteOneUser = (req, res) => {};

export default { getAllUsers, getOneUser, modifyOneUser, deleteOneUser };
