const mongoose = require('mongoose');
const userModel = require('./models/user');
const { mongoURL } = require('./config');

mongoose.connect(
  mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("i'm in the database house!!");
    }
  }
);

const addUser = async () => {
  try {
    await userModel.deleteMany({});

    const users = await userModel.insertMany([
      {
        email: 'abdou@email.fr',
        password: 'abcdefg',
        firstName: 'abdou',
        surName: 'Sow',
        dateOfBirth: 14 / 07 / 2000,
      },
      {
        email: 'ahmed@email.fr',
        password: 'abcdefgh',
        firstName: 'ahmed',
        surName: 'khaireddine',
        dateOfBirth: 01 / 01 / 2000,
      },
      {
        email: 'amir@email.fr',
        password: 'abcdefgh',
        firstName: 'amir',
        surName: 'hatam',
        dateOfBirth: 02 / 01 / 2000,
      },
      {
        email: 'ezka@email.fr',
        password: 'abcdefgh',
        firstName: 'ezka',
        surName: 'medhi',
        dateOfBirth: 03 / 01 / 2000,
      },
    ]);

    console.log('users', users);

    console.log('The collection users was recreated with the base data');
  } catch (err) {
    console.error(err);
  }
};

addUser();
