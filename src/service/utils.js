'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const writeJsonFile = async (content, fileName) => {
  const contentFile = JSON.stringify(content);

  try {
    await fs.writeFile(fileName, contentFile);
    console.info(chalk.green(`Operation success. File created.`));
  } catch (error) {
    console.error(chalk.red(`Can't write data to file...`));
    throw error;
  }
};

const getRandomItemFromArray = (array) => {
  const randomItem = [array[getRandomInt(0, array.length - 1)]];

  return randomItem;
};

const getRandomPropertyValue = (object) => {
  const randomPropertyValue = object[Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)]];

  return randomPropertyValue;
};

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = {
  readContent,
  getRandomItemFromArray,
  getRandomPropertyValue,
  getRandomInt,
  writeJsonFile,
  shuffle,
};
