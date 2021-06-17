const userModel = require('../models/userModel');
const expressValidator = require('express-validator');

const sendUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    res.json({
      message: 'This is the users list Jeff',
      users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      errorMessage: 'Sorry Dude error find users',
    });
  }
};

const addUser = async (req, res) => {
  try {
    const errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      const userAdded = await userModel.create(req.body);

      res.json({ message: 'The user was added, Jeff', userAdded });
    }
  } catch (error) {
    res.status(500).json({ message: 'Sorry Dude error add user', error });
  }
};

const sendUserInfosByName = async (req, res) => {
  try {
    // const userInfosByName = await userModel.find();

    res.json({
      message: 'This is the sendUserInfosByName Jeff',
      userInfosByName,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Sorry Dude error add user',
    });
  }
};

// const sendUserInfosByEmail;

module.exports = {
  sendUsers,
  addUser,
  sendUserInfosByName,
  // sendUserInfosByEmail,
};
