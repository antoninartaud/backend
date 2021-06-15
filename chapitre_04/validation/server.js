const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
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

app.get('/', (req, res) => {
  res.send('On the route / my friend !');
});
app.listen(port, () => {
  console.log(`Major Tom on port ${port}`);
});
