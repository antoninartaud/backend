const express = require('express');
const app = express();

const arrAuthorsBooks = [
  {
    author: 'Laurence Nowell, UK',
    books: 'Beowulf',
  },

  {
    author: 'William Shakespeare, UK',
    books: 'Hamlet, Othello, Romeo and Juliet, MacBeth',
  },
  {
    author: 'Charles Dickens, UK',
    books: 'Oliver Twist, A Christmas Carol',
  },
  {
    author: 'Oscard Wilde, UK',
    books: 'The Picture of Dorian Gray, The Importance of Being Earnest',
  },
];

app.get('/authors/:id', function (req, res) {
  let infoAuthors = arrAuthorsBooks[req.params.id - 1];
  res.json(infoAuthors);
});

app.get('/authors/:id/books/:books', (req, res) => {
  let books = arrAuthorsBooks[req.params.id - 1].books;
  res.json(books);
});

const port = 8000;

app.listen(port, function () {
  console.log(`Le serveur est lancé mon gars sur ${port}`);
});
