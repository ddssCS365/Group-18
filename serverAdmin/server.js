require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(' MongoDB connection error:', err));

// Admin Routes
const adminRoutes = require('./routes/admin.routes');
app.use('/api/admins', adminRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
