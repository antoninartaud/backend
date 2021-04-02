const express = require('express');
const dataCountries = require('./dataCountries.js');

const app = express();

app.get('/country/all/', function (req, res) {
  res.json(dataCountries);
});

const port = 8080;
app.listen(port, function () {
  console.log('Server in listening to Major Tom');
});
