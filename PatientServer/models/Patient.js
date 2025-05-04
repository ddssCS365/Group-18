const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // Add other fields like:
    dateOfBirth: { type: Date },
    phoneNumber: { type: String },
    address: { type: String },
    // ...
});

module.exports = mongoose.model('Patient', patientSchema);