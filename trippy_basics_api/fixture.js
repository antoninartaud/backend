const mongoose = require('mongoose');
const hotelModel = require('./model/hotel');
const restaurantModel = require('./model/restaurant');

mongoose.connect(
  'mongodb://localhost:27017/trippy_basics',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("i'm in the database house!!");
    }
  }
);

const addHotel = async () => {
  try {
    await hotelModel.deleteMany({});

    const hotels = await hotelModel.insertMany([
      {
        name: 'Lutetia',
        address: '45 Boulevard Raspail, 75006 Paris',
        city: 'Paris',
        country: 'France',
        stars: 5,
        hasSpa: true,
        hasPool: true,
        priceCategory: 3,
      },
      {
        name: 'Bristol',
        address: '112 Rue du Faubourg Saint-Honoré, 75008 Paris',
        city: 'Paris',
        country: 'France',
        stars: 4,
        hasSpa: false,
        hasPool: true,
        priceCategory: 2,
      },
    ]);

    console.log('hotels', hotels);

    console.log('The collection hotels was recreated with the base data');
  } catch (err) {
    console.error(err);
  }
};

// addHotel();

const addRestaurant = async () => {
  try {
    await restaurantModel.deleteMany({});
    const restaurants = await restaurantModel.insertMany([
      {
        name: 'Septime',
        address: '80 Rue de Charonne, 75011 Paris',
        city: 'Paris',
        country: 'France',
        stars: 2,
        cuisine: 'Française',
        priceCategory: 2,
      },
      {
        name: 'Mokonuts',
        address: '5 Rue Saint-Bernard, 75011 Paris',
        city: 'Paris',
        country: 'France',
        stars: 1,
        cuisine: 'Japonaise',
        priceCategory: 3,
      },
    ]);

    console.log('restaurants', restaurants);

    console.log('The collection restaurants was recreated with the base data');
  } catch {
    console.log(err);
  }
};

// addRestaurant();
