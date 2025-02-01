const AdminModel = require("../models/adminModel");
const userModel = require("../models/userModel");
const transporter = require("../middleware/nodemailer");
const RandomPassword = require("../middleware/randompass");
const taskModel = require("../models/taskModel");


// Admin Login Handler
const adminLogin = async (req, res) => {
    const { userid, password } = req.body;

    try {
        // Check if the admin exists
        const admin = await AdminModel.findOne({ userid });
        if (!admin) {
            return res.status(400).json({ msg: "Invalid user ID" });
        }

        // Check if the password matches
        if (admin.password !== password) {
            return res.status(400).json({ msg: "Invalid password" });
        }

        // Return admin data if credentials are correct
        res.status(200).json(admin);
    } catch (error) {
        console.error("Error during admin login:", error);
        res.status(500).json({ msg: "An error occurred during login", error: error.message });
    }
};

// Create New User Handler
const createUser = async (req, res) => {
    const { username, designation, email } = req.body;

    // Generate a random password
    const myPass = RandomPassword();

    const mailOptions = {
        from: "sumanqaj9876@gmail.com",
        to: email,
        subject: "Your Company Work Details Account",
        text: `Dear ${username},\n\nYour account has been created with the following password: ${myPass}\n\nYou can log in using your email account.\n\nBest regards,\nSuman (Your Boss)`,
    };

    try {
        // Send email with the new account details
        const emailInfo = await transporter.sendMail(mailOptions);

        // Create the user in the database
        const newUser = await UserModel.create({
            username,
            designation,
            email,
            password: myPass, // Store the generated password
        });

        if (newUser) {
            res.status(200).json({ success: true, message: "User created and email sent successfully!", emailInfo });
        } else {
            res.status(500).json({ success: false, message: "Failed to create user in the database" });
        }
    } catch (error) {
        console.error("Error during user creation:", error);
        res.status(500).json({ msg: "An error occurred while creating the user", error: error.message });
    }
};

const userDisplay = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ msg: "Failed to fetch users" });
    }
};




const taskAssignSave = async (req, res) => {
    const { empid, tasktitle, taskdescription, compdays } = req.body;

    try {
        const task = await taskModel.create({
            empid,
            tasktitle,
            taskdescription,
            completiondays: compdays,
        });

        res.status(200).json({ msg: "Task assigned successfully", task });
    } catch (error) {
        console.error("Error assigning task:", error);
        res.status(500).json({ msg: "Failed to assign task" });
    }
};
const userReport = async (req, res) => {
    try {
        const Task = await taskModel.find().populate("empid");
        res.status(200).send(Task);
    } catch (error) {
        console.log(error);
    }
}


const taskReAssign = async (req, res) => {
    const { taskid } = req.body;
    try {
        const Data = await taskModel.findByIdAndUpdate(taskid, { empreport: 'pending' })
        res.send({ msg: "Task succesfully Re Assigned!" });
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    adminLogin,
    createUser,
    userDisplay,
    taskAssignSave,
    userReport,
    taskReAssign
};
