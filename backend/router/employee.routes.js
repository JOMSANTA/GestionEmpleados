const express = require("express"); //requerido para generar las rutas
const router = express.Router();
//router un obj  para guardar las rutas como propiedes de este

const employee = require("../controller/employee.controller");

router.get("/", employee.getEmployees);
router.post("/", employee.createEmployee);
router.get("/:id", employee.getEmployee);
router.put("/:id", employee.updateEmployee);
router.delete("/:id", employee.deleteEmployee);

module.exports = router;
