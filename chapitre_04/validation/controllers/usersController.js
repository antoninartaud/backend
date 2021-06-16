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

module.exports = {
  sendUsers,
};
