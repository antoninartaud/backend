const express = require('express');
const cors = require('cors');

const port = 8000;

const app = express();

app.use(cors());

app.use(express.json());

const students = [
  {
    name: 'Mickael',
  },
  {
    name: 'Jeff',
  },
  {
    name: 'Melinda',
  },
];

app.get('/students', function (req, res) {
  res.json(students);
});

app.post('/students/add', function (req, res) {
  // console.log('req.params', req);

  console.log(req.body);

  const newStudent = req.body;
  students.push(newStudent);

  res.json({
    message: 'good morning Mr Student',
    students,
  });
});

app.get('*', (req, res) => {
  res.json({
    message: "The route doesn't exist",
  });
});

app.listen(port, function () {
  console.log('What about 42 ???');
});
