const mongoose = require('mongoose');

const userShema = mongoose.Schema({
  userName: { type: String, unique: true },
  email: String,
  age: Number,
  city: String,
  date: { type: Date, default: Date.now },
});

const userModel = mongoose.model('User', userShema);
module.exports = userModel;
