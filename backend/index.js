const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

const { mongoose } = require("./database");

//config de  serv
app.set("port", process.env.PORT || 3000); //utilizar puerto proporcionado o 3000
//sirve para desplegar app

//middlewares
app.use(morgan("dev")); //muestra en msj lo q hace el midd
app.use(express.json()); //leer json
app.use(cors({ origin: "http://localhost:4200" }));

//rutas
app.use("/api/employees", require("./router/employee.routes")); //llamado a las  rutas de empleados
//para acceder a la ruta con api/ employees

//servidor escuchando por 3000
app.listen(3000, () => {
  console.log("conectado por puerto ", app.get("port"));
});
