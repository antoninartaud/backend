const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Restaurant = require('./model/restaurant');
const Hotel = require('./model/hotel');

mongoose.connect('mongodb://localhost:27017/trippy_basics', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("i'm in the database house!!");
  }
});

const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('You talking to me ?');
});

app.listen(port, () => {
  console.log(`Do you listen to me on port: ${port} ?`);
});
