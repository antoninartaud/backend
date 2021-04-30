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
  // console.log('params envoyés par user :', req.params.name);

  // console.log(dataCountries[0]);
  const upperCaseName = req.params.name.toUpperCase();

  // console.log('params envoyés par user UpperCase:', upperCaseName);

  // const countriesNameUpperCase = dataCountries[0].name.toUpperCase();

  // console.log(
  //   'params envoyés par user dataCountries[i].name.toUpperCase :',
  //   countriesNameUpperCase
  // );

  for (i = 0; i < dataCountries.length; i++) {
    let countriesNameUpperCase = dataCountries[i].name.toUpperCase();
    if (countriesNameUpperCase === upperCaseName) {
      res.json(dataCountries[i]);
    }
  }
});

app.listen(port, () => {
  console.log('What about 42 ??');
});
