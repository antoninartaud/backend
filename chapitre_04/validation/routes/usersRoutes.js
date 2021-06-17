const express = require('express');
const router = express.Router();
const {
  sendUsers,
  addUser,
  sendUserInfosByName,
  sendUserInfosById,
} = require('../controllers/usersController');
const { userValidationRules } = require('../middlewares/validationMiddlewares');

router.get('/', sendUsers);

router.post('/add', userValidationRules, addUser);

router.get('/:username', sendUserInfosByName);

router.get('/:id', sendUserInfosById);

router.all('*', (req, res) => {
  res.status(404).json({
    errorMessage: 'This is a dead end my friend !',
  });
});

module.exports = {
  usersRoutes: router,
};
