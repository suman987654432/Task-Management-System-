const AdminModel = require("../models/adminModel")

const adminLogin = async (req, res) => {
    const { userid, password } = req.body
    try {
        const Admin = await AdminModel.findOne({ userid: userid })
        if (!Admin) {
            res.status(400).json({ msg: "Invalid user Id" })
        }
        if (Admin.password != password) {
            res.status(400).json({ msg: "Invalid password" });
        }
        res.status(200).json(Admin)
    } catch (error) {
        console.log(error)
    }


}
module.exports = {
    adminLogin
}