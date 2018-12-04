const Trip = require('../models/trip.js');

exports.getAll = (req, res) => {
  Trip.find()
    .exec((err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log(data)
      res.send(data)
    })
}

exports.add = (req, res) => {
  Trip.create(req.body)
    .exec(res.end());
}