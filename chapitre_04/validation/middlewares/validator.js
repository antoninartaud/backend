const { body } = require('express-validator');

const userValidationRules = () => {
  return [
    body('username').isLength({ min: 4 }),
    body('email').isEmail(),
    body('age').has().digits(2),
    body('city').isIn[('Paris', 'Tokyo', 'Los Angeles')],
  ];
};

module.exports = {
  userValidationRules,
};
