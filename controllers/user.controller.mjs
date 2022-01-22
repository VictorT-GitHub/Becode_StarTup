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

// GET one user (no password) (VEROUILLED)

// PATCH/PUT user (no password ?) (VEROUILLED)

// DELETE user (VEROUILLED)

export default { getAllUsers };
