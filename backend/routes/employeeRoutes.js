const express = require("express");
const route = express.Router();
const empController = require("../controllers/employeeController");

route.post("/employeelogin", empController.emploginCheck);
route.post("/employeetaskdisplay", empController.empTaskDisplay)


module.exports = route;