const Admin = require('../models/admin.model');

// GET all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST create new admin
exports.createAdmin = async (req, res) => {
  const { fullName, email, password, lastActivity, lastApprove } = req.body;
  try {
    const newAdmin = new Admin({ fullName, email, password, lastActivity, lastApprove });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create admin', error: err.message });
  }
};

// PUT update admin
exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Admin.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update admin' });
  }
};

// DELETE admin
exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    await Admin.findByIdAndDelete(id);
    res.status(200).json({ message: 'Admin deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete admin' });
  }
};
