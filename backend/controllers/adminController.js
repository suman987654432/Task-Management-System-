const AdminModel = require("../models/adminModel")
const UserModel = require("../models/userModel");
const transporter = require("../middleware/nodemailer")
const RandomPassword = require("../middleware/randompass")
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
    const { username, designation, email } = req.body;
    const myPass = RandomPassword();
    const mailoption = {
        from: "sumanqaj9876@gmail.com",
        to: email,
        subject: "Your company work detail Account",
        text: `Dear ${username} chutiya   Your Account created with password : ${myPass} 
    You can login using with your Email account   it is my order   your suman boss.
   `
    }


    try {
        const info = await transporter.sendMail(mailoption)
        const EmpData = await UserModel.create({
            username: username,
            designation: designation,
            email: email,
            password: myPass
        })

        res.status(200).json({ success: true, message: "Email sent", info })
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