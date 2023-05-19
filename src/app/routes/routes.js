const { Router } = require('express');

const authMiddleware = require('../middleware/auth');

const UserController = require('../controllers/UserController');
const SessionsController = require('../controllers/SessionsController');
const TaskController = require('../controllers/TaskController');

const routes = Router();

// USER
routes.post('/users', UserController.store);

// SESSIONS
routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);

// USER
routes.put('/users', UserController.update);

// TASKS
routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:task_id', TaskController.update);

module.exports = routes;