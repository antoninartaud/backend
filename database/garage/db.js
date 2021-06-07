const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/garage', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("I'm connected to the database");
  }
});
