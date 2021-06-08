const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/garage', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("I'm connected to the database");
  }
});

const carsSchema = new mongoose.Schema({
  brand: String, // String is shorthand for {type: String}
  model: String,
  year: Number,
  created: { type: Date, default: Date.now },
});

const Car = mongoose.model('Car', carsSchema);

// const car = new Car({
//   brand: 'Renault',
//   model: 'Espace',
//   year: 1999,
// });

// const car = new Car({
//   brand: 'Renault',
//   model: 'Scenic',
//   year: 2004,
// });

// const car = new Car({
//   brand: 'Peugeot',
//   model: '308',
//   year: 2017,
// });

car.save();
