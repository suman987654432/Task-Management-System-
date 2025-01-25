const express = require("express")
const route = express.Router()
const AdminController = require("../controllers/adminController")
route.post("/adminlogin", AdminController.adminLogin)
route.post("/createuser", AdminController.createUser)
module.exports = route;







