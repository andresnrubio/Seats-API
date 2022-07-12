const mongoose = require("mongoose");

//Definicion del modelo de usuarios
const MovieScheme = new mongoose.Schema(
  {
    //aqui se declara la estructura de nuestro objeto
    name: { type: String },
    year: { type: Number },
    duration: { type: Number },
    language: { type: String },
    cast: { type: String },
    director: { type: String },
    genre: { type: String },
    sinopsis: { type: String },
    rated: { type: ["G", "PG", "PG-13", "R", "NC-17", "NR"], default: "NR" },
    poster: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    trailer: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt ((Marcas de tiempo))
    versionKey: false,
  }
);

module.exports = mongoose.model("movies", MovieScheme);
