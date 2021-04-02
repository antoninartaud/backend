const express = require('express');
const getNamePokemon = require('./dataPokemon.js');

const app = express();

app.get('/pokemon/:id', function (req, res) {
  // console.log("params envoyé par l'user", req.params);
  let id = req.params.id;

  // var name = getNamePokemon(id);

  res.send({ name: getNamePokemon(id) });
});

const port = 8080;
app.listen(port, function () {
  console.log('42... really ?');
});
