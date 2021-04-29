const express = require('express');
const cors = require('cors');
const dataCountries = require('./dataCountries');

const app = express();

app.use(cors());

const port = 8000;

app.get('/countries', (req, res) => {
  res.json({
    dataCountries,
  });
});

app.get('/countries/:name', (req, res) => {
  console.log('params envoyés par user :', req.params.name);

  res.json({});
});

app.listen(port, () => {
  console.log('What about 42 ??');
});
