const mongoose = require("mongoose");

//Definicion del modelo de usuarios
const TheaterScheme = new mongoose.Schema(
  {
    //aqui se declara la estructura de nuestro objeto
    
  },
  {
    timestamps:true, //TODO createdAt, updatedAt ((Marcas de tiempo))
    versionKey:false,
  }
);


module.exports = mongoose.model("theaters", TheaterScheme)