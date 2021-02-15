'use strict';

const fs = require(`fs`);

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

module.exports.writeJsonFile = (content, fileName) => {
  const contentFile = JSON.stringify(content);

  try {
    fs.writeFileSync(fileName, contentFile);
    console.info(`Operation success. File created.`);
  } catch (error) {
    console.error(`Can't write data to file...`);
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
