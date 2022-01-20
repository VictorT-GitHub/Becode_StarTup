import mongoose from "mongoose";

// MONGOOSE SCHEMA
const convschema = new mongoose.Schema(
  {
    usersID: [String],
    messages: [
      {
        authorID: String,
        text: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

// export MONGOOSE MODEL
export default mongoose.model("conversations", convschema);
