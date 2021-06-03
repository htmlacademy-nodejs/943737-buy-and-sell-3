'use strict';

const DEFAULT_COUNT = 10;

const MAX_COUNT_OFFER = 1000;

const DEFAULT_FILE_NAME = `mocks.json`;

const FILE_TITLES_PATH = `./data/titles.txt`;

const FILE_SENTENCES_PATH = `./data/sentences.txt`;

const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const OFFER_TYPE = {
  OFFER: `offer`,
  SALE: `sale`,
};

const SUM_RESTRICT = {
  MIN: 1000,
  MAX: 100000,
};

const PICTURE_RESTRICT = {
  MIN: 1,
  MAX: 16,
};

module.exports = {
  DEFAULT_COUNT,
  MAX_COUNT_OFFER,
  DEFAULT_FILE_NAME,
  FILE_CATEGORIES_PATH,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  OFFER_TYPE,
  SUM_RESTRICT,
  PICTURE_RESTRICT,
};
