import mongoose from "mongoose";

// MONGOOSE SCHEMA
const userschema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    birthday: Date,
    motto: String,
  },
  { timestamps: true }
);

// export MONGOOSE MODEL
export default mongoose.model("users", userschema);
