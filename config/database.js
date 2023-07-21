const mongoose = require('mongoose');

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
  } catch (err) {
    console.error('Error connecting to MongoDB database:', err);
  }
};

module.exports = connectDB;
