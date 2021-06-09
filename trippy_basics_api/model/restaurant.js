const mongoose = require('mongoose');
// ESM import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
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
});

const Restaurant = mongoose.model('Restarant', restaurantSchema);

// ESM export const Restaurant = mongoose.model('Restarant', restaurantSchema);
module.exports = Restaurant;
