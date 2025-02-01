const express = require("express")
const route = express.Router()
const AdminController = require("../controllers/adminController")
route.post("/adminlogin", AdminController.adminLogin)
route.post("/createuser", AdminController.createUser)
route.get("/assigntaskdisplay", AdminController.userDisplay);
route.post("/assigntask", AdminController.taskAssignSave);
route.get("/showreport", AdminController.userReport);
route.post("/taskreassing", AdminController.taskReAssign);
module.exports = route;







