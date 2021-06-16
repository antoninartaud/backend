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

// const addUser = async (req, res) => {
//   try {
//     const user = await userModel.create
//   } catch (error) {
//     console.log(error);
//     res.json({
//       errorMessage: 'Sorry Dude error add user',
//     });
//   }
// }

module.exports = {
  sendUsers,
};
