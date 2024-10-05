const Empleados = require("../models/employee");

const employeeController = {};

employeeController.getEmployees = async (req, res) => {
  const employees = await Empleados.find();
  res.json(employees);
};

employeeController.createEmployee = async (req, res) => {
  const employee = new Empleados(req.body);
  await employee.save();
  res.json("empleado almacenado");
};

employeeController.getEmployee = async (req, res) => {
  const employee = await Empleados.findById(req.params.id); //obtener id
  res.json(employee);
};

employeeController.updateEmployee = async (req, res) => {
  const { id } = req.params; //guardar en cont id el id obtenido por req.p
  const employee = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cargo: req.body.cargo,
    email: req.body.email,
  };
  await Empleados.findByIdAndUpdate(id, { $set: employee }, { new: true }); // signar los datos actualizados y con {new true }se crea si no existe
  res.json({ status: "empleado actualizado" });
};

employeeController.deleteEmployee = async (req, res) => {
  await Empleados.findByIdAndDelete(req.params.id);
  res.json("empleado eliminado");
};

module.exports = employeeController;
