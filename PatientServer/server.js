// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/users");
const messageRoutes = require("./routes/messages");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
connectDB();
app.listen(5000, () => console.log("Server running on port 5000"));
