import mongoose from "mongoose";

// MONGOOSE SCHEMA
const convschema = new mongoose.Schema(
  {
    usersID: [mongoose.Types.ObjectId],
    messages: [
      {
        authorID: mongoose.Types.ObjectId,
        text: {
          type: String,
          max: 2000,
        },
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
