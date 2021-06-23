const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoURL, port } = require('./config');
const expressValidator = require('express-validator');
const passwordValidator = require('password-validator');
const { userValidation } = require('./middlewares/validation');

const userModel = require('./models/user');

mongoose.connect(
  mongoURL,
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

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('in get / route my friend !');
// });

app.post('/', userValidation, async (req, res) => {
  try {
    const errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      const newUser = await userModel.create(req.body);

      res.json({ message: 'The user was added!', newUser });
    }
  } catch (error) {
    res.status(500).json({ message: 'There was a problem', error });
  }

  // res.send('in post /user route');
});

app.get('/users', (req, res) => {
  res.send('in get / route my friend !');
});

app.get('*', (req, res) => {
  res.json(
    {
      errorMessage: 'The route was not found',
    },
    404
  );
});

app.listen(port, () => {
  console.log(`What about request 42 on port ${port} ?`);
});
