import usermodel from "../models/user.model.mjs";

// POST REGISTER new user
const postNewUser = (req, res) => {
  const { email, password, firstname, lastname, birthday, motto } = req.body;

  const newUser = new usermodel({
    email: email,
    password: password,
    firstname, // Pas besoin d'écrire la
    lastname, // suite comme au dessus car en js
    birthday, // [motto,] === [motto: motto,]
    motto, // (ça aussi c'est du destructuring)
  });

  newUser.save((err, data) => {
    if (err) res.status(400).send(err);
    else res.status(201).send(data._id);
  });
};

// POST LOGIN

// GET LOGOUT

export default { postNewUser };
