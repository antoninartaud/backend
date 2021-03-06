const userModel = require('../models/userModel');
const expressValidator = require('express-validator');

const sendUsers = async (req, res) => {
  try {
    const usersList = await userModel.find().lean();

    res.json({
      message: 'This is the usersList list Jeff',
      usersList,
    });
  } catch (error) {
    console.log(error);
    res.json({
      errorMessage: 'Sorry Dude error find usersList',
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
  console.log(req);
  try {
    // console.log('req.params.username', req.params.username);
    const username = req.params.username;
    const filter = { username: username };
    const userInfos = await userModel.findOne(filter).lean();

    res.json({
      message: 'This is the sendUserInfosByName Jeff',
      userInfos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sorry Dude error sendUserInfosByName',
    });
  }
};

const sendUserInfosByEmail = async (req, res) => {
  try {
    // console.log('req.params.email', req.params.email);
    const userEmail = req.params.email;
    const filter = { email: userEmail };
    const userInfos = await userModel.findOne(filter).lean();

    res.json({
      message: 'This is the sendUserInfosByEmail Elvis!',
      userInfos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sorry Elvis error sendUserInfosByEmail !',
    });
  }
};

const sendUserInfosById = async (req, res) => {
  try {
    console.log('req.params.id', req.params.id);
    const userId = req.params.id;
    const userInfos = await userModel.findById(userId).lean();

    // res.send('hello from sendUserInfosById');
    res.json({
      message: 'This is the sendUserInfosById Jeff!',
      userInfos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sorry Dude error sendUserInfosById',
    });
  }
};

module.exports = {
  sendUsers,
  addUser,
  sendUserInfosByName,
  sendUserInfosById,
  sendUserInfosByEmail,
};
