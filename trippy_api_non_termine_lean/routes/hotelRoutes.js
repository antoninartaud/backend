const express = require('express');
const router = express.Router();
const {
  getHotels,
  getHotel,
  addHotel,
  updateHotelName,
  deleteHotel,
} = require('../controllers/hotelControllers');
const { validationHotels } = require('../middlewares/validationsMiddlewares');

router.get('/', getHotels);

router.get('/:id', getHotel);

router.post('/', validationHotels, addHotel);

router.patch('/:id', updateHotelName);

router.delete('/:id', deleteHotel);

module.exports = router;
