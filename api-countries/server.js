const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/countries', function (req, res) {
  res.send(['espagne', 'sénégal', 'colombie', 'vietnam', 'cambodge']);
});

let port = 8000;
app.listen(port, function () {
  console.log(`Server on port: ${port} is pogotting`);
});
