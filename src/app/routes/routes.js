import { Router } from 'express';

const routes = Router();

routes.get('/test', (req, res) => {
  res.send('Success !')
})