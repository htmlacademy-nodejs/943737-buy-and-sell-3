'use strict';

const {
  getRandomInt,
  shuffle,
  writeJsonFile,
  getRandomItemFromArray,
  getRandomPropertyValue,
  readContent
} = require(`../../utils`);
const {
  FILE_CATEGORIES_PATH,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  SUM_RESTRICT,
  OFFER_TYPE,
  PICTURE_RESTRICT,
  DEFAULT_COUNT,
  MAX_COUNT_OFFER,
  DEFAULT_FILE_NAME
} = require(`./generate.constants`);
const {ExitCode} = require(`../../constants`);
const chalk = require(`chalk`);

const getPictureFileName = (number) => {
  const pictureNumber = number < 10 ? `0` + number : number;
  const pictureFileName = `item${pictureNumber}.jpeg`;

  return pictureFileName;
};

const generateOffers = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    category: getRandomItemFromArray(categories),
    description: shuffle(sentences).slice(1, 5).join(` `),
    picture: getPictureFileName(getRandomInt(PICTURE_RESTRICT.MIN, PICTURE_RESTRICT.MAX)),
    title: getRandomItemFromArray(titles),
    type: getRandomPropertyValue(OFFER_TYPE),
    sum: getRandomInt(SUM_RESTRICT.MIN, SUM_RESTRICT.MAX),
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);

    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;

    if (countOffer > MAX_COUNT_OFFER) {
      console.error(chalk.red(`Не больше ${MAX_COUNT_OFFER} объявлений`));
      process.exit(ExitCode.ERROR);
    }

    const content = generateOffers(countOffer, titles, categories, sentences);

    await writeJsonFile(content, DEFAULT_FILE_NAME);
  }
};

