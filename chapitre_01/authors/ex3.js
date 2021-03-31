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

app.get('/authors/:id/books/', (req, res) => {
  res.send(
    `${arrAuthorsBooks[req.params.id - 1].author} wrote 
      ${arrAuthorsBooks[req.params.id - 1].books}`
  );
});

const port = 8000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
