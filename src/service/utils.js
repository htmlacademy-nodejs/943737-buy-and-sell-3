'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

module.exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

module.exports.writeJsonFile = async (content, fileName) => {
  const contentFile = JSON.stringify(content);

  try {
    await fs.writeFile(fileName, contentFile);
    console.info(chalk.green(`Operation success. File created.`));
  } catch (error) {
    console.error(chalk.red(`Can't write data to file...`));
    throw error;
  }
};

module.exports.getRandomItemFromArray = (array) => {
  const randomItem = [array[exports.getRandomInt(0, array.length - 1)]];

  return randomItem;
};

module.exports.getRandomPropertyValue = (object) => {
  const randomPropertyValue = object[Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)]];

  return randomPropertyValue;
};
