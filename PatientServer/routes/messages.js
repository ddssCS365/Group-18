// routes/messages.js
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST /api/messages
router.post("/", async (req, res) => {
  const { senderId, receiverId, text } = req.body;
  try {
    const message = new Message({ senderId, receiverId, text });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: "Failed to send message" });
  }
});

// GET /api/messages/:userId1/:userId2
router.get("/:userId1/:userId2", async (req, res) => {
  try {
    const { userId1, userId2 } = req.params;
    const messages = await Message.find({
      $or: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 },
      ],
    }).sort("timestamp");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;
