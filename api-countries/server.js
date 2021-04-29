const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/countries', function (req, res) {
  var listCountries = ['espagne', 'sénégal', 'colombie', 'vietnam', 'cambodge'];

  res.json(listCountries);
});

let port = 8000;
app.listen(port, function () {
  console.log(`Server on port: ${port} is pogotting`);
});
