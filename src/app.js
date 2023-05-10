import express from 'express';

import routes from './app/routes/routes.js';

import './database';

const app = express();

app.use(routes)

app.listen(3000, () => {
  console.log('Server on !')
})