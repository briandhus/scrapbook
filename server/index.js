const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js');
const Trip = require('../database/controllers/trip.js');
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/trips', Trip.getAll);

app.post('/trips', Trip.add);

app.listen(port, () => console.log(`Listening on port ${port}!`));
