const express = require('express');
const cors = require('cors');

const port = 8000;

const app = express();

const superHerosList = [
  {
    name: 'Iron Man',
    power: ['money'],
    color: 'red',
    isAlive: true,
    age: 46,
    image:
      'https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart',
  },
  {
    name: 'Thor',
    power: ['electricty', 'worthy'],
    color: 'blue',
    isAlive: true,
    age: 300,
    image:
      'https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg',
  },
  {
    name: 'Daredevil',
    power: ['blind'],
    color: 'red',
    isAlive: false,
    age: 30,
    image:
      'https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg',
  },
];

const debug = (req, res, next) => {
  console.log('I received a request !');
  next();
};

const transformName = (req, res, next) => {
  console.log('req.body.name dans transform:', req.body.name);

  if (req.body.name === undefined) {
    res.json({
      errorMessage: 'Hummm...please a name!..',
    });
  } else {
    req.body.name = req.body.name.toLowerCase();

    next();
  }

  req.body.name = req.body.name.toLowerCase();
  next();
};
// {
//   const heroNameLowerCase = req.body.name.toLowerCase();
//   console.log(heroNameLowerCase);
// };

app.use(cors());
app.use(express.json());
app.use(debug());

app.get('/heroes', (req, res) => {
  res.json(superHerosList);
});

app.get('/heroes/:name', (req, res) => {
  // console.log('req.params.name:', req.params.name);

  const selectedHero = superHerosList.find(
    (elem) => req.params.name.toLowerCase === elem.name
  );
  res.json(selectedHero);
});

app.get('/heroes/:name/powers', (req, res) => {
  // res.json({ message: 'who am I ?' });

  const selectedHero = superHerosList.find(
    (elem) => req.params.name.toLowerCase === elem.name.toLowerCase
  );

  res.json(selectedHero.power);
});

app.get('*', (req, res) => {
  res.json({
    errorMessage: 'Ground Control to Major Tom ????',
  });
});

app.post('/heroes', transformName, (req, res) => {
  // console.log(req.body);

  const hero = req.body;

  superHerosList.push(hero);

  res.json({
    message: 'my hero....',
    hero,
  });
});

app.post('/heroes/:name/powers', (req, res) => {
  // res.json({ message: 'who am I ?' });
  const nameHero = req.params.name.toLowerCase();

  const selectedHero = superHerosList.find(
    (elem) => nameHero === elem.name.toLowerCase
  );

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

app.listen(port, function () {
  console.log('what about 42 ???');
});
