const testRoute = (req, res, next) => {
  console.log('Request is in da house !!');

  next();
};

module.exports = {
  testRoute,
};
