const hotelModel = require('../models/hotel');
const expressValidator = require('express-validator');

const getHotels = async (req, res) => {
  try {
    const hotels = await hotelModel.find().lean();

    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'There was a problem', error });
  }
};

const getHotel = async (req, res) => {
  try {
    const idHotel = req.params.id;
    const hotel = await hotelModel.findById(idHotel).lean();

    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: 'There was a problem', error });
  }
};

const addHotel = async (req, res) => {
  try {
    const errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      const newHotel = await hotelModel.create(req.body);

      res.json({ message: 'The hotel was added!', newHotel });
    }
  } catch (error) {
    res.status(500).json({ message: 'There was a problem', error });
  }
};

const updateHotelName = async (req, res) => {
  try {
    const hotelName = req.params.id;
    // console.log('hotelName:', hotelName);

    const newHotelName = req.query.name;
    // console.log('newHotelName', newHotelName);

    await hotelModel.updateOne({ name: hotelName }, { name: newHotelName });

    const hotelNameUpdated = await hotelModel
      .findOne({ name: newHotelName })
      .lean();

    res.json({
      message: 'my new name is great !',
      hotelNameUpdated,
    });
  } catch (error) {
    res.status(500).json({ message: 'There was a problem', error });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const idHotel = req.params.id;
    console.log(idHotel);
    const hotelDeleted = await hotelModel.findOneAndDelete({ _id: idHotel });

    res.json({
      hotelDeleted,
      message: "I've seen so many things...aaahh..Bye, Bye, World...-(",
    });
  } catch (error) {
    res.status(500).json({ message: 'There was a problem', error });
  }
};

module.exports = {
  getHotels,
  getHotel,
  addHotel,
  updateHotelName,
  deleteHotel,
};
