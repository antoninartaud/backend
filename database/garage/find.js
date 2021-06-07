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

const id = '60be1954a202993b03168be1';

Car.findById(id, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log('Result : ', docs);
  }
});
