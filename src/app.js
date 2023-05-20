const express = require('express');
const cors = require('cors')

const routes = require('./app/routes/routes.js');

require('./database');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log('Server on !')
})