import express from 'express';
import cors from 'cors';
import { superHeros } from './dataHeros.mjs';

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

app.post(
  '/heroes',
  (req, res, next) => {
    const hero = req.body;

    const selectedHero = superHeros.find((elem) => {
      return elem.name.toLowerCase() === hero.name.toLowerCase();
    });

    console.log('selectedHero', selectedHero);

    if (selectedHero) {
      res.json({
        errorMessage: 'The hero already exists',
      });
    } else {
      next();
    }
  },
  transformName,
  (req, res) => {
    // console.log(req.body);

    const hero = req.body;

    superHeros.push(hero);

    res.json({
      message: 'Ok, héros ajouté',
      hero,
    });
  }
);

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

const continueIfHeroExists = (req, res, next) => {
  const heroName = req.params.name.toLowerCase();

  const selectedHero = superHeros.find((elem) => {
    return elem.name.toLowerCase() === heroName;
  });

  if (selectedHero) {
    next();
  } else {
    res.json({
      errorMessage: "The hero doesn't exists",
    });
  }
};

app.delete('/heroes/:name', continueIfHeroExists, (req, res) => {
  const heroName = req.params.name.toLowerCase();

  // superHeros = superHeros.filter(elem => {
  //     return elem.name.toLowerCase() !== heroName
  // })

  for (var i = 0; i < superHeros.length; i++) {
    if (superHeros[i].name.toLowerCase() === heroName) {
      superHeros.splice(i, 1);
    }
  }

  res.json({
    message: `${heroName} effacé correctement`,
  });
});

app.delete('/heroes/:name/power/:power', continueIfHeroExists, (req, res) => {
  const heroName = req.params.name.toLowerCase();
  const heroPower = req.params.power.toLowerCase();

  const selectedHero = superHeros.find((elem) => {
    return elem.name.toLowerCase() === heroName;
  });

  const indexPower = selectedHero.powers.findIndex((elem) => {
    return elem === heroPower;
  });

  if (indexPower > -1) {
    selectedHero.powers.splice(indexPower, 1);

    res.json({
      message: `Le pouvoir ${heroPower} de ${heroName} a été effacé correctement`,
    });
  } else {
    res.json({
      message: `Le pouvoir ${heroPower} n'existe pas dans l'héro ${heroName}`,
    });
  }
});

app.put('/heroes/:name', continueIfHeroExists, (req, res) => {
  const heroName = req.params.name.toLowerCase();
  const newHero = req.body;

  const heroId = superHeros.findIndex((elem) => {
    return elem.name.toLowerCase() === heroName;
  });

  superHeros[heroId] = newHero;

  // superHeros.splice(heroId, 1, newHero) // Same as above

  res.json({
    message: `${heroName} a été remplace correctement`,
  });
});

app.listen(port, () => {
  console.log('Server is listenin at port ', port);
});
