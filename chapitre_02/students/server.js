const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const students = ['prince', 'michael', 'terence'];

app.get('/students', function (req, res) {
  res.json(students);
});

app.post('/students/add', function (req, res) {
  const newStudent = req.body;
  students.push(newStudent);

  res.json({
    message: 'good morning Mr Student',
  });

  console.log('req.params', req.params.name);
});

const port = 8000;
app.listen(port, function () {
  console.log('What about 42 ???');
});
