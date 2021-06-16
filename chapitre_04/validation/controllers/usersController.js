const userModel = require('../models/user');

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
    // const userAdded = await userModel.insertOne();

    res.json({
      message: 'This is the users list Jeff',
      userAdded,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Sorry Dude error add user'
    })
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
      message: 'Sorry Dude error add user'
    })
  }
};;

const sendUserInfosByEmail;


module.exports = {
  sendUsers,
  addUser,
  sendUserInfosByName,
  sendUserInfosByEmail
};
