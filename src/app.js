import express from 'express';

import routes from './app/routes/routes.js';

const app = express();

app.use(routes)

app.listen(3000, () => {
  console.log('Server on !')
})