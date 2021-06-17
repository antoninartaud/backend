const express = require('express');
const router = express.Router();
const {
  sendUsers,
  addUser,
  sendUserInfosByName,
  sendUserInfosByEmail,
} = require('../controllers/usersController');
const { userValidationRules } = require('../middlewares/validationMiddlewares');

router.get('/', sendUsers);

router.post('/add', userValidationRules, addUser);

router.get('/users/:username', sendUserInfosByName);

// router.get('/users/:email', sendUserInfosByEmail);

router.all('*', (req, res) => {
  res.status(404).json({
    errorMessage: 'This is a dead end my friend !',
  });
});

module.exports = {
  usersRoutes: router,
};
