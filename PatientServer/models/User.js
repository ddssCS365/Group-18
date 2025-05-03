// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  dateOfBirth: String,
  nextAppointment: String,
  therapist: String,
});

module.exports = mongoose.model("User", userSchema);
