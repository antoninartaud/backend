const { body } = require('express-validator');
// const passwordValidator = require('password-validator');

const userValidation = [
  body('email').isEmail(),
  body('password').isLength({ min: 8, max: 8 }),
];

module.exports = {
  userValidation,
};
