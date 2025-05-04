const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialization: { type: String, required: true },
    // Add any other relevant fields here
});

module.exports = mongoose.model('Therapist', therapistSchema);