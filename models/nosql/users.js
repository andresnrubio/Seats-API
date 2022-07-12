const mongoose = require("mongoose");

//Definicion del modelo de usuarios
const UserScheme = new mongoose.Schema(
  {
    //aqui se declara la estructura de nuestro objeto
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: ["user", "admin",], default: "user" },
  },
  {
    timestamps:true, //TODO createdAt, updatedAt ((Marcas de tiempo))
    versionKey:false,
  }
);


module.exports = mongoose.model("users", UserScheme)