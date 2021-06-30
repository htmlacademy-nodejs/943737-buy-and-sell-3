'use strict';

const offersRoutes = require(`./offers-routes`);
const {Router} = require(`express`);

const routes = new Router();

routes.use(`/offers`, offersRoutes);

module.exports = routes;
