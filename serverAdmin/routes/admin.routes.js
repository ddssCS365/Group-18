const express = require("express");
const db = require("./firebase");
const router = express.Router();

// Create new admin
router.post("/api/admins", async (req, res) => {
  try {
    const newAdmin = req.body;
    const docRef = await db.collection("admins").add(newAdmin);
    res.status(201).send({ id: docRef.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete admin by ID
router.delete("/api/admins/:id", async (req, res) => {
  try {
    const adminId = req.params.id;
    await db.collection("admins").doc(adminId).delete();
    res.status(200).send({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
