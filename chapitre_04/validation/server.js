const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { testRoute } = require('./middlewares/testRoute');
const { usersRoutes } = require('./routes/usersRoutes');

mongoose.connect(
  'mongodb://localhost:27017/validation',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("i'm in mongodb place dude !!");
    }
  }
);

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.use(testRoute);

app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Major Tom on port ${port}`);
});
