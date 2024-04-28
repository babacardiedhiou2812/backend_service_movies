const db = require("../models");
const movie = db.movies;
// Create and Save a new movie
exports.create = function (req, res) {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a movies
  const movie = new movie({
    id: req.body.id,
    title: req.body.title,
    release: req.body.release ? req.body.release : false,
  });
// Save movies in the database
  movie
    .save(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the movie.",
      });
    });
};
// Retrieve all movies from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name
      ? { name: { $regex: new RegExp(name), $options: "i" } }
      : {};
    movie.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies.",
        });
      });
  };