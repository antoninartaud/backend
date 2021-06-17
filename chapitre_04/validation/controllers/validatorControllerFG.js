const { validationResult } = require('express-validator');

const validate = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    res.json({
      errors: errors.array(), // to be used in a json loop
    });
    return;
  } else {
    res.json({
      success: true,
      message: 'User will be saved',
    });
  }
};

module.exports = {
  validate,
};
