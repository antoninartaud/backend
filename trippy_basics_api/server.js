const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Restaurant = require('./model/restaurant');
const Hotel = require('./model/hotel');

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

const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('You talking to me ?');
});

// console.log(mongoose);
// console.log(Restaurant);
// console.log(Hotel);
/*********** 
CRUD Hotel
************/

app.get('/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.json(hotels);
  } catch {
    console.log(err);

    res.status(500).json({
      errorMessage: 'Sorry Try camping my friend...',
    });
  }
});

app.get('/hotels/:id', (req, res) => {
  res.json('hi from hotels:id route');
});

app.post('/hotels', (req, res) => {
  console.log(req.body);
});

app.put('/hotels/:id', (req, res) => {
  console.log(req.query);
  res.json('hi from put hotels newname ');
});

app.delete('/hotels/:id', (req, res) => {
  res.json('hi from delete hotels');
});

/*********** 
 CRUD Restaurant
 ************/

app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.json(restaurants);
  } catch (err) {
    console.log(err);
    res.json({
      errorMessage: 'Sorry Dude try Mc Donald',
    });
  }
  res.json('route get resto');
});

app.get('/restaurants/:id', (req, res) => {
  res.json('get resto :id');
});

app.post('/restaurants', (req, res) => {
  res.json('post resto');
});

app.put('/restaurants/:id', (req, res) => {
  res.json('put resto route');
});

app.delete('/restaurants/:id', (req, res) => {
  res.json('delte resto route');
});

app.get('*', (req, res) => {
  res.status(404).json({
    errorMessage: 'This is a dead end road my friend !',
  });
});

app.listen(port, () => {
  console.log(`Do you listen to me on port: ${port} ?`);
});
