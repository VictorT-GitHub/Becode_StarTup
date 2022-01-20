import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const app = express();
const PORT = process.env.PORT;

// Connection to MongoDB Atlas database
mongoose.connect(process.env.DB_URI, (err) => {
  if (err) console.log("[MongoDB connection ERROR]: " + err);
  else console.log("Connected to MongoDB");
});

// Express Config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// -- Routes --
// Home-page
app.get("/", (req, res) => res.send("Welcome on the StarTup API !"));

// 404 Middleware

// Server
app.listen(PORT, () =>
  console.log(`server started: http://localhost:${PORT}/`)
);
