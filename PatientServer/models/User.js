// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ["patient", "therapist"], required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  dateOfBirth: String,
});

module.exports = mongoose.model("User", userSchema);
