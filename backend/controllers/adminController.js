const AdminModel = require("../models/adminModel")
const UserModel = require("../models/userModel");
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

const createUser = async (req, res) => {
    const { username, designation, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).send({ msg: "All required fields must be filled!" });
        }

        const User = await UserModel.create({ username, designation, email, password });

        if (User) {
            res.status(200).send({ msg: "new user created!" });
        }
        else {
            res.status(500).send({ msg: "error in server!" })
        }
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ msg: "Failed to create user", error: error.message });
    }
};

module.exports = {
    adminLogin,
    createUser
}