// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import mongoose from 'mongoose'

const app = express();
app.use(cors()); // Use CORS to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB Connection
mongoose.connect('mongodb://localhost:connect', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB");
});

// Define a schema and model for Users
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

// API endpoint to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
