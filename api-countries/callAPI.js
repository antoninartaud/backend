const request = require('request');

request.get('http://localhost:8000/countries', function (err, res, data) {
  // console.log(data);
  let listOfCountries = JSON.parse(data);
  console.log(listOfCountries);
  let reverseList = listOfCountries.reverse();

  console.log(reverseList);
});
