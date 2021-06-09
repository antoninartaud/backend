const mongoose = require('mongoose');
// ESM import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  address: String,
  city: String,
  country: String,
  stars: {
    type: Number,
    min: 1,
    max: 5,
  },
  hasSpa: Boolean,
  hasPool: Boolean,
  priceCategory: {
    type: Number,
    min: 1,
    max: 3,
  },
  created: { type: Date, default: Date.now },
});

// ESM export const Hotel = mongoose.model('Hotel', hotelSchema);

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
