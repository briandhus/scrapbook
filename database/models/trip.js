const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  endDate: String,
  airline: String,
  airlinePrice: Number,
  hotel: String,
  color: String,
  photo: { data: Buffer, contentType: String},
});

module.exports = mongoose.model('Trip', journalSchema);
