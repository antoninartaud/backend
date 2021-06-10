const mongoose = require('mongoose');
const {
  uniqueNamesGenerator,
  colors,
  starWars,
} = require('unique-names-generator');

const Character = require('./character');

mongoose.connect('mongodb://localhost:27017/starWars', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("I'm connected");
  }
});

const characters = [];

for (let index = 0; index < 60; index++) {
  characters.push({
    name: uniqueNamesGenerator({ dictionaries: [starWars] }),
    age: Math.floor(Math.random() * 100 + 1),
    swordColor: uniqueNamesGenerator({ dictionaries: [colors] }),
    isAlive: Math.random() > 0.5 ? true : false,
  });
}

const fillCharacters = async () => {
  try {
    await Character.deleteMany({});

    await Character.insertMany(characters);
  } catch (error) {
    console.error(error);
  }
};

// fillCharacters()

const sumAges = async () => {
  try {
    const result = await Character.aggregate([
      {
        $group: {
          _id: '$age',
          num: { $sum: 1 },
        },
      },
    ]);

    console.log('sumAges', result);
  } catch (error) {
    console.error(error);
  }
};

// sumAges()

const unwindPowers = async () => {
  try {
    const result = await Character.aggregate([
      {
        $unwind: '$powers',
      },
    ]);

    console.log('unwindPowers', result);
  } catch (error) {
    console.error(error);
  }
};

unwindPowers();

const showBiggerThan30 = async () => {
  try {
    const result = await Character.aggregate([
      //     {
      //         $group: {
      //             _id: "$isAlive",
      //             num: { $sum: 1 }
      //         }
      //     }
      {
        $match: {
          age: { $gt: 30, $lt: 50 },
        },
      },
      {
        $project: {
          _id: 0,
          'name of character': { $toLower: '$name' },
          lightsaber: '$swordColor',
          isAlive: 1,
          age: 1,
        },
      },
      {
        $sort: {
          age: 1,
          lightsaber: 1,
        },
      },
      {
        $skip: 1,
      },
      {
        $limit: 10,
      },
    ]);

    console.log('result showBiggerThan30:', result);
  } catch (error) {
    console.error(error);
  }
};

// showBiggerThan30()
