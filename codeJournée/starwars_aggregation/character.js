const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  age: Number,
  swordColor: String,
  isAlive: Boolean,
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
