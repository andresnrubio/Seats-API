const mongoose = require("mongoose");

//Definicion del modelo de usuarios
const StorageScheme = new mongoose.Schema(
  {
    //aqui se declara la estructura de nuestro objeto
    url: { type: String },
    filename: { type: Number },
  },
  {
    timestamps:true, //TODO createdAt, updatedAt ((Marcas de tiempo))
    versionKey:false,
  }
);


modules.exports = mongoose.model("storages", StorageScheme)