const mongoose = require('mongoose');
// ESM import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  address: String,
  city: String,
  country: String,
  stars: {
    type: Number,
    min: 1,
    max: 5,
  },
  cuisine: String,
  priceCategory: {
    type: Number,
    min: 1,
    max: 3,
  },
  created: { type: Date, default: Date.now },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// ESM export const Restaurant = mongoose.model('Restarant', restaurantSchema);
module.exports = Restaurant;
