const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  surName: String,
  dateOfBirth: Date,
  date: { type: Date, default: Date.now },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
