const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;