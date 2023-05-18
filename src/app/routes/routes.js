const { Router } = require('express');

const UserController = require('../controllers/UserController');
const SessionsController = require('../controllers/SessionsController');
const TaskController = require('../controllers/TaskController');

const authMiddleware = require('../middleware/auth.js')

const routes = Router();

// USER
routes.post('/users', UserController.store);

// SESSIONS
routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);

// USER
routes.put('/users', UserController.update);

// TASKS
routes.post('/tasks', TaskController.store)
routes.get('/tasks', TaskController.index)

module.exports = routes;