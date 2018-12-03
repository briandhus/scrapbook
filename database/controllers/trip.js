const Trip = require('../models/trip.js');

exports.getAll = (req, res) => {
  Trip.find()
    .exec((err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(data)
    })
}