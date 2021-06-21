const express = require('express');
const router = express.Router();
const {
  getRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurantName,
  deleteRestaurant,
} = require('../controllers/restaurantControllers');

router.get('/', getRestaurants);

router.get('/:id', getRestaurant);

router.post('/', addRestaurant);

router.patch('/:id', updateRestaurantName);

router.delete('/:id', deleteRestaurant);

module.exports = router;
