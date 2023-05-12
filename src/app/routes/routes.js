const { Router } = require('express');

const UserController = require('../controllers/UserController');
const SessionsController = require('../controllers/SessionsController');

const routes = Router();

// USER
routes.post('/users', UserController.store);

// SESSIONS
routes.post('/sessions', SessionsController.store);

module.exports = routes;