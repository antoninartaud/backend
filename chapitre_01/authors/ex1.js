const express = require('express');
const app = express();

const arrAuthors = [
  'Laurence Nowell, UK',
  'William Shakespeare, UK',
  'Charles Dickens, UK',
  'Oscard Wilde, UK',
];

app.get('/', (req, res) => {
  res.send('Authors API');
});

app.get('/authors/:id', (req, res) => {
  res.send(`${arrAuthors[req.params.id - 1]}`);
});

const port = 8000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
