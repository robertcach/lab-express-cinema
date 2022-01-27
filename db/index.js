// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";

const Movie = require('../models/Movie.model');
const allMovies = require('../seeds/movies.seed.js');


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  /* .then(() => Movie.create(allmovies))
  .then((movies) => console.log(movies)) */
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

