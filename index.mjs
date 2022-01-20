import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

import auth_router from "./routes/auth.router.mjs";
import user_router from "./routes/user.router.mjs";
import conv_router from "./routes/conv.router.mjs";

const app = express();
const PORT = process.env.PORT || 9000;

// Connection to MongoDB Atlas
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

// Middlewares to Controller Routers
app.use("/api/auth", auth_router);
app.use("/api/user", user_router);
app.use("/api/conv", conv_router);

// 404 Middleware
app.use("/", (req, res) => res.status(404).send("Error404: page not found"));

// -- Server --
app.listen(PORT, () =>
  console.log(`server started: http://localhost:${PORT}/`)
);
