'use strict';

const express = require(`express`);

const offersRoutes = require(`./routes/offers-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);

const app = express();
const DEFAULT_PORT = 8080;

app.use(`/offers`, offersRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.listen(DEFAULT_PORT);
