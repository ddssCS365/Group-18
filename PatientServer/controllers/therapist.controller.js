const Therapist = require('../models/Therapist');

exports.getLikes = async (req, res) => {
  try {
    const { therapistId } = req.params;
    const therapist = await Therapist.findById(therapistId);
    if (!therapist) {
      return res.status(404).json({ message: 'Therapist not found' });
    }
    res.status(200).json({ likes: therapist.likes });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching likes', error: error.message });
  }
};

exports.addLike = async (req, res) => {
  try {
    const { therapistId } = req.params;
    const therapist = await Therapist.findById(therapistId);
    if (!therapist) {
      return res.status(404).json({ message: 'Therapist not found' });
    }
    therapist.likes += 1;
    await therapist.save();
    res.status(200).json({ likes: therapist.likes });
  } catch (error) {
    res.status(500).json({ message: 'Error adding like', error: error.message });
  }
};