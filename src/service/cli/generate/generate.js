'use strict';

const {
  getRandomInt,
  shuffle,
  writeJsonFile,
  getRandomItemFromArray,
  getRandomPropertyValue
} = require(`../../utils`);
const {
  CATEGORIES,
  SENTENCES,
  TITLES,
  SUM_RESTRICT,
  OFFER_TYPE,
  PICTURE_RESTRICT,
  DEFAULT_COUNT,
  MAX_COUNT_OFFER,
  DEFAULT_FILE_NAME
} = require(`./generate.constants`);
const {ExitCode} = require(`../../constants`);

const getPictureFileName = (number) => {
  const pictureNumber = number < 10 ? `0` + number : number;
  const pictureFileName = `item${pictureNumber}.jpeg`;

  return pictureFileName;
};

const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    category: getRandomItemFromArray(CATEGORIES),
    description: shuffle(SENTENCES).slice(1, 5).join(` `),
    picture: getPictureFileName(getRandomInt(PICTURE_RESTRICT.MIN, PICTURE_RESTRICT.MAX)),
    title: getRandomItemFromArray(TITLES),
    type: getRandomPropertyValue(OFFER_TYPE),
    sum: getRandomInt(SUM_RESTRICT.MIN, SUM_RESTRICT.MAX),
  }))
);

module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;

    if (countOffer > MAX_COUNT_OFFER) {
      console.error(`Не больше ${MAX_COUNT_OFFER} объявлений`);
      process.exit(ExitCode.ERROR);
    }

    const content = generateOffers(countOffer);

    writeJsonFile(content, DEFAULT_FILE_NAME);
  }
};

