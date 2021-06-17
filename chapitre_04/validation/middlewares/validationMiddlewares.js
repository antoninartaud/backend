const { body } = require('express-validator');

const userValidationRules = [
  body('username').isLength({ min: 4 }),
  body('email').isEmail(),
  body('age').isInt({ gt: 9, lt: 100 }),
  body('city').isIn(['Paris', 'Tokyo', 'Los Angeles']),
];

module.exports = {
  userValidationRules,
};
