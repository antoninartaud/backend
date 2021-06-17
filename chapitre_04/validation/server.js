const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/userModel');
const { testRoute } = require('./middlewares/testRoute');
const { usersRoutes } = require('./routes/usersRoutes');
const expressValidator = require('express-validator');

mongoose.connect('mongodb://localhost:27017/validation', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("i'm in mongodb place dude !!");
  }
});

const app = express();
const port = 8002;

app.use(cors());

app.use(express.json());

app.use(testRoute);

app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Major Tom on port ${port}`);
});
