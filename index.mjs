import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 9000;

// Connection to MongoDB Atlas database

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
