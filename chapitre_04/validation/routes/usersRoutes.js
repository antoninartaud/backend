const express = require('express');
const router = express.Router();
const { sendUsers } = require('../controllers/usersController');

router.get('/', sendUsers);

router.all('*', (req, res) => {
  res.status(404).json({
    errorMessage: 'This is a dead end my friend !',
  });
});

module.exports = {
  usersRoutes: router,
};
