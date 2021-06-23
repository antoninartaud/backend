const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/express_login',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("I'm in the db house Dude");
    }
  }
);

const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('in get / route my friend !');
});

app.listen(port, () => {
  console.log(`What about request 42 on port ${port} ?`);
});
