const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

const port = 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('i"m in route / !!');
});

app.listen(8000, () => {
  console.log(`App listening on port ${port}!`);
});
