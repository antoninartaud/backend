const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./model/user');
const expressValidator = require('express-validator');

mongoose.connect('mongodb://localhost:27017/validation', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("i'm in mongodb place dude !!");
  }
});

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
  // res.send('On the route / my friend !');
  try {
    const users = await User.find();

    res.json(users);
  } catch {
    console.log(error);
    res.json({
      errorMessage: 'Sorry Dude error find users',
    });
  }
});

app.get('*', (req, res) => {
  res.status(404).json({
    errorMessage: 'This is a dead end my friend !',
  });
});

app.listen(port, () => {
  console.log(`Major Tom on port ${port}`);
});
