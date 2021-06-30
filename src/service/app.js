'use strict';

const express = require(`express`);
const routes = require(`./routes/routes`);
const {HttpCode} = require(`../service/constants`);

const app = express();

app.use(routes);
app.use((req, res) => {
  res
    .status(HttpCode.NOT_FOUND)
    .send(`Not found`);
});

module.exports = app;
