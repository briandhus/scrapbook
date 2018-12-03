const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/index.js');
const Trip = require('../database/controllers/trip.js');
const port = 3000;

console.log(Trip);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/trips', Trip.getAll);

app.listen(port, () => console.log(`Listening on port ${port}!`));
