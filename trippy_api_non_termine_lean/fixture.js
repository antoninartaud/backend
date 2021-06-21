const mongoose = require('mongoose');
const hotelModel = require('./models/hotel');
const restaurantModel = require('./models/restaurant');

mongoose.connect(
  'mongodb://localhost:27017/trippy',
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
        address: '45 Boulevard Raspail, 75006',
        city: 'Paris',
        country: 'France',
        stars: 5,
        hasSpa: true,
        hasPool: true,
        priceCategory: 3,
      },
      {
        name: 'Bristol',
        address: '112 Rue du Faubourg Saint-Honoré, 75008',
        city: 'Paris',
        country: 'France',
        stars: 4,
        hasSpa: false,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: 'Ahmed Hotel',
        address: '11, ru de turem',
        city: 'Toulouse',
        country: 'France',
        stars: 4,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: 'Sow hotel',
        address: '58, rue tard',
        city: 'Brest',
        country: 'Colombie',
        stars: 2,
        hasSpa: false,
        hasPool: false,
        priceCategory: 3,
      },
      {
        name: 'Amara hotel',
        address: '1 rue du Chemin',
        city: 'Bruxelles',
        country: 'Suède',
        stars: 2,
        hasSpa: true,
        hasPool: false,
        priceCategory: 2,
      },
      {
        name: 'Axel hotel',
        address: '7, rue du Sude',
        city: 'Madrid',
        country: 'Espagne',
        stars: 3,
        hasSpa: true,
        hasPool: true,
        priceCategory: 1,
      },
      {
        name: 'Fasulu hotel',
        address: '4 rue de Londres',
        city: 'Londres',
        country: 'Angleterre',
        stars: 2,
        hasSpa: false,
        hasPool: false,
        priceCategory: 3,
      },
      {
        name: 'Karim hotel',
        address: "7, rue de l'hotel",
        city: 'Croissant',
        country: 'Boulangerie',
        stars: 1,
        hasSpa: true,
        hasPool: true,
        priceCategory: 2,
      },
      {
        name: 'Mugilan hotel',
        address: '57, rue de Mugilan',
        city: 'Mugilan',
        country: 'Mugilan',
        stars: 3,
        hasSpa: true,
        hasPool: false,
        priceCategory: 2,
      },
    ]);

    console.log('hotels', hotels);

    console.log('The collection hotels was recreated with the base data');
  } catch (err) {
    console.error(err);
  }
};

addHotel();

const addRestaurant = async () => {
  try {
    await restaurantModel.deleteMany({});
    const restaurants = await restaurantModel.insertMany([
      {
        name: 'Septime',
        address: '80 Rue de Charonne, 75011',
        city: 'Paris',
        country: 'France',
        stars: 2,
        cuisine: 'Française',
        priceCategory: 2,
      },
      {
        name: 'Mokonuts',
        address: '5 Rue Saint-Bernard, 75011',
        city: 'Paris',
        country: 'France',
        stars: 1,
        cuisine: 'Japonaise',
        priceCategory: 3,
      },
      {
        name: 'Paul',
        address: '25, rue de Tolbiac, 75013',
        city: 'Paris',
        country: 'France',
        stars: 3,
        cuisine: 'Française',
        priceCategory: 1,
      },
      {
        name: 'Rachid',
        address: "12, rue de l'Avenir, 25420",
        city: 'Tarbes',
        country: 'France',
        stars: 3,
        cuisine: 'Berbère',
        priceCategory: 2,
      },
      {
        name: 'Moussa',
        address: "24, rue de l'Arbre, 51420",
        city: 'Vierzon',
        country: 'New York',
        stars: 1,
        cuisine: 'Américaine',
        priceCategory: 3,
      },
      {
        name: 'Hélène',
        address: '12, rue Amérique, 5122',
        city: 'Calcutta',
        country: 'Inde',
        stars: 3,
        cuisine: 'Indienne',
        priceCategory: 3,
      },
      {
        name: 'Speedy Gonzales',
        address: '12, rue de Mexico',
        city: 'Mexico',
        country: 'Mexique',
        stars: 2,
        cuisine: 'Mexicaine',
        priceCategory: 1,
      },
      {
        name: 'Chez Abdou',
        address: '57, rue du Sénégal',
        city: 'Dakar',
        country: 'Sénégal',
        stars: 3,
        cuisine: 'Sénégalaise',
        priceCategory: 3,
      },
      {
        name: 'Don Quishoote',
        address: '24, rue du Mezcal',
        city: 'LSD',
        country: 'DansLesNuages',
        stars: 3,
        cuisine: 'Sucré',
        priceCategory: 2,
      },
    ]);

    console.log('restaurants', restaurants);

    console.log('The collection restaurants was recreated with the base data');
  } catch {
    console.log(err);
  }
};

// addRestaurant();
