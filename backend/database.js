const mongoose = require("mongoose");
const URI =
  "mongodb+srv://jomarsantander2702:mean123@cluster0.mpq48.mongodb.net/gestion";
//conexion con path, sigue la verif de la conect

mongoose
  .connect(URI)
  .then((db) => console.log("base datos conectada"))
  .catch((err) => console.error(err));

module.exports = mongoose;
