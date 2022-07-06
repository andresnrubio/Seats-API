const mongoose = require("mongoose");

//definimos funcion de conexion con el DB_URI de nuestra db de mongo
const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("CONNECTION TO DB: OK");
      } else {
        console.log("CONNECTION TO DB: ERROR");
      }
    }
  );
};

module.exports = dbConnect;
