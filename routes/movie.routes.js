module.exports = app => {
    const movies = require("../controllers/movies.controller.js");
    let router = require("express").Router();
  
    // Create a new Student
    router.post("/", movies.create);
  
    // Retrieve all movies
    router.get("/", movies.findAll);
  
    app.use("/api/students", router);
  };