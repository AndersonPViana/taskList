const express = require('express');

const routes = require('./app/routes/routes.js');

require('./database');

const app = express();

app.use(express.json());

app.use(routes)

app.listen(3000, () => {
  console.log('Server on !')
})