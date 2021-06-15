const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.listen(8000, () => {
  console.log('Serveur lancé');
});

app.get('/', (req, res) => {
  res.render('home', {
    title: "Handlebars c'est nul",
    img: 'https://restcountries.eu/data/fra.svg',
    authors: ['Auteur 1', 'Auteur 2', 'Auteur 3'],
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.use(express.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
  console.log(req.body);
});
