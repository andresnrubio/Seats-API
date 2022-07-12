const express = require("express");
const router = express.Router();

//* Importacion de controladores
const {getMovies} = require("../controllers/movies")

//Aqui se genera RUTA para consulta y manejo de las peliculas (CRUD)

router.get("/", getMovies);

module.exports = router;
