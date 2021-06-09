const express = require('express');
const cors = require('cors');

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
