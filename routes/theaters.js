const express = require("express");
const router = express.Router();

//Aqui se genera RUTA para consulta y manejo de las salas (CRUD)

router.get("/", (req, res) => {
  const data = ["hola", "mundo"];
  res.send({ data });
});

module.exports = router;
