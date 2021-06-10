const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("I'm connected to the database");
  }
});

const studentsSchema = mongoose.Schema({
  name: String,
  age: Number,
  date: { type: Date, default: Date.now },
});

const Student = mongoose.model('Student', studentsSchema);

const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find().exec();

    res.json(students);
  } catch (error) {
    console.error('Error in GET /students', error);

    res.json({
      message: 'Error when finding students :(',
    });
  }
});

app.post('/students', async (req, res) => {
  try {
    const newStudent = req.body;

    const student = new Student({
      name: newStudent.name,
      age: newStudent.age,
    });

    const studentSaved = await student.save();

    res.json({
      message: 'The student was saved correctly',
      newStudent,
    });
  } catch (error) {
    console.error('Error in POST /students', error);

    res.json({
      message: 'The student was not saved :(',
    });
  }
});

app.get('*', (req, res) => {
  res.json({
    message: "The route doesn't exist",
  });
});

app.listen(port, () => {
  console.log(`J'écoute des requêtes sur le port ${port}`);
});
