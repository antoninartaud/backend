const express = require('express');
const cors = require('cors');

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
