const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/scrapbook');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Successful db connection!')
});

module.exports = db;
