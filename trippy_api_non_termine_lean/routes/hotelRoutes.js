const express = require('express');
const router = express.Router();
const {
  getHotels,
  getHotel,
  addHotel,
  updateHotelName,
} = require('../controllers/hotelControllers');
const { validationHotels } = require('../middlewares/validationsMiddlewares');

router.get('/', getHotels);

router.get('/:id', getHotel);

router.post('/', validationHotels, addHotel);

router.patch('/:id', updateHotelName);

module.exports = router;
