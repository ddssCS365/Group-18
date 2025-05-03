// routes/users.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET /api/users/:id
router.get("/:id", async (req, res) => {
  console.log("here" + req.params.id);
  try {
    const user = await User.findOne({ fullName: req.params.id });
    console.log(user);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user).status(200);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
