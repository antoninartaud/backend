const express = require('express');
const app = express();

const arrAuthorsBooks = [
  {
    name: 'Laurence Nowell',
    nationality: 'UK',
    books: 'Beowulf',
  },

  {
    name: 'William Shakespeare',
    nationality: 'UK',
    books: 'Hamlet, Othello, Romeo and Juliet, MacBeth',
  },
  {
    name: 'Charles Dickens',
    nationality: 'UK',
    books: 'Oliver Twist, A Christmas Carol',
  },
  {
    name: 'Oscard Wilde',
    nationality: 'UK',
    books: 'The Picture of Dorian Gray, The Importance of Being Earnest',
  },
];

app.get('/authors/:id', function (req, res) {
  let infoAuthors = arrAuthorsBooks[req.params.id - 1];

  res.json({
    name: infoAuthors.name,
    nationality: infoAuthors.nationality,
  });
});

app.get('/authors/:id/books', (req, res) => {
  let books = [];
  books.push(arrAuthorsBooks[req.params.id - 1].books);

  res.json({
    books: books,
  });
});

const port = 8000;

app.listen(port, function () {
  console.log(`Le serveur est lancé mon gars sur ${port}`);
});
