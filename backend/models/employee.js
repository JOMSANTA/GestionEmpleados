const mongoose = require("mongoose"); // req moong para definir los esquemas de datos

const { Schema } = mongoose; //crear esquema

const EmployeeSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cargo: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("employee", EmployeeSchema);
