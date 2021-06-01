import express from 'express';
import cors from 'cors';
import { superHeros } from './dataHeroes.mjs';

const port = 8000;

const app = express();

const debug = (req, res, next) => {
  console.log('I received a request!');

  next();
};

app.use(cors());

app.use(express.json());

app.use(debug);

app.get('/heroes', (req, res) => {
  res.json(superHeros);
});

app.get('/heroes/:name', (req, res) => {
  const nameHero = req.params.name.toLowerCase();

  for (var i = 0; i < superHeros.length; i++) {
    if (superHeros[i].name.toLowerCase() === nameHero) {
      res.json(superHeros[i]);
    }
  }

  res.json({
    message: 'Hero not found',
  });
});

app.get('/heroes/:name/powers', (req, res) => {
  const nameHero = req.params.name.toLowerCase();

  const selectedHero = superHeros.find((elem) => {
    return nameHero === elem.name.toLowerCase();
  });

  res.json(selectedHero.powers);
});

const transformName = (req, res, next) => {
  // console.log("transformName req.body ", req.body);
  // console.log("transformName req.body.name ", req.body.name);

  if (req.body.name === undefined) {
    res.json({
      erroMessage: "To add a hero send at least he's name",
    });
  } else {
    req.body.name = req.body.name.toLowerCase();

    next();
  }
};

app.post('/heroes', transformName, (req, res) => {
  // console.log(req.body);

  const hero = req.body;

  superHeros.push(hero);

  res.json({
    message: 'Ok, héros ajouté',
    hero,
  });
});

app.post('/heroes/:name/powers', (req, res) => {
  const nameHero = req.params.name.toLowerCase();

  const selectedHero = superHeros.find((elem) => {
    return nameHero === elem.name.toLowerCase();
  });

  if (selectedHero) {
    const heroPower = req.body.power;

    selectedHero.powers.push(heroPower);

    res.json({
      message: `Power added! The powers of ${nameHero} are ${selectedHero.powers}`,
    });
  } else {
    res.json({
      errorMessage: 'Hero not found',
    });
  }
});

app.listen(port, () => {
  console.log('Server is listenin at port ', port);
});
