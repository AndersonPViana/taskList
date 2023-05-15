const { Router } = require('express');

const UserController = require('../controllers/UserController');
const SessionsController = require('../controllers/SessionsController');

const auth = require('../middleware/auth.js')

const routes = Router();

// USER
routes.post('/users', UserController.store);

// SESSIONS
routes.post('/sessions', SessionsController.store);

routes.use(auth);

// USER
routes.put('/users', UserController.update);

module.exports = routes;