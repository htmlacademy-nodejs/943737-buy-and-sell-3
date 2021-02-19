'use strict';

module.exports.DEFAULT_COUNT = 1;

module.exports.MAX_COUNT_OFFER = 1000;

module.exports.DEFAULT_FILE_NAME = `mocks.json`;

module.exports.TITLES = [
  `Продам книги Стивена Кинга`,
  `Продам новую приставку Sony Playstation 5`,
  `Продам отличную подборку фильмов на VHS`,
  `Куплю антиквариат`,
  `Куплю породистого кота`,
];

module.exports.SENTENCES = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится — верну всё до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдёте дешевле — сброшу цену.`,
  `Таких предложений больше нет!`,
  `При покупке с меня бесплатная доставка в черте города.`,
];

module.exports.CATEGORIES = [
  `Книги`,
  `Разное`,
  `Посуда`,
  `Игры`,
  `Животные`,
  `Журналы`,
];

module.exports.OFFER_TYPE = {
  OFFER: `offer`,
  SALE: `sale`,
};


module.exports.SUM_RESTRICT = {
  MIN: 1000,
  MAX: 100000,
};

module.exports.PICTURE_RESTRICT = {
  MIN: 1,
  MAX: 16,
};
