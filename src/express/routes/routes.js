'use strict';

const offersRoutes = require(`./offers-routes`);
const myRoutes = require(`./my-routes`);
const mainRoutes = require(`./main-routes`);
const {Router} = require(`express`);

const routes = new Router();

routes.use(`/offers`, offersRoutes);
routes.use(`/my`, myRoutes);
routes.use(`/`, mainRoutes);

module.exports = routes;
