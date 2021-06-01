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
  console.log(req.body);

  const hero = req.body;

  const newHero = superHeros.find((elem) => elem.name === hero.name);

  if (newHero) {
    res.json({
      message: `no, thanks i already got this one: ${newHero.name}`,
    });
  } else {
    superHeros.push(hero);

    res.json({
      message: 'Ok, héros ajouté',
      hero,
    });
  }
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

const isHeroExist = (req, res, next) => {
  const hero = req.params.name.toLowerCase();
  console.log('🚀 ~ file: server.mjs ~ line 109 ~ isHeroExist ~ hero', hero);

  const newHero = superHeros.find((elem) => elem.name.toLowerCase() === hero);
  console.log(
    '🚀 ~ file: server.mjs ~ line 112 ~ isHeroExist ~ newHero',
    newHero
  );

  if (newHero) {
    next();
  } else {
    res.json("This dude didn't leave in my app !");
  }
};

app.delete('/heroes/:name', isHeroExist, (req, res) => {
  res.json(superHeros);
});

app.listen(port, () => {
  console.log('What about 42 ???', port);
});
