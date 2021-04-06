const request = require('request');

request.get('http://localhost:8000/countries', function (err, res, body) {
  // console.log(typeof body);
  let listOfCountries = JSON.parse(body);
  console.log(listOfCountries);
  let reverseList = listOfCountries.reverse();

  console.log(reverseList);
});
