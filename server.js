// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Create Express server
const app = express();

// Import the database configuration
const connectDB = require('./config/database');

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Add middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB();

// Retrieve port from environment variables
const port = process.env.PORT || 3001;

// Connect database and then start server
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
