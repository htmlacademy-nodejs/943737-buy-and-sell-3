'use strict';

const express = require(`express`);
const routes = require(`./routes/routes`);
const path = require(`path`);
const {HttpCode} = require(`../service/constants`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;
const TEMPLASTES_DIR = `templates`;

const app = express();

app.use(routes);
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use((req, res) => {
  res
    .status(HttpCode.NOT_FOUND)
    .render(`errors/404`);
});

app.set(`views`, path.resolve(__dirname, TEMPLASTES_DIR));
app.set(`view engine`, `pug`);

app.listen(DEFAULT_PORT);
