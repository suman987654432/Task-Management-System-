const AdminModel = require("../models/adminModel");
const UserModel = require("../models/userModel");
const transporter = require("../middleware/nodemailer");
const RandomPassword = require("../middleware/randompass");
const TaskModel = require("../models/taskModel");

// Admin Login Handler
const adminLogin = async (req, res) => {
    const { userid, password } = req.body;
    try {
        const admin = await AdminModel.findOne({ userid });
        if (!admin || admin.password !== password) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        res.status(200).json(admin);
    } catch (error) {
        console.error("Error during admin login:", error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

// Create New User Handler
const createUser = async (req, res) => {
    const { username, designation, email } = req.body;
    try {
        // Check if email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User with this email already exists" });
        }

        // Generate a random password
        const password = RandomPassword();

        // Send email with account details
        await transporter.sendMail({
            from: "sumanqaj9876@gmail.com",
            to: email,
            subject: "Your Company Work Details Account",
            text: `Dear ${username},\n\nYour account has been created with the following password: ${password}\n\nYou can log in using your email.\n\nBest regards,\nSuman (Your Boss)`
        });

        // Create user in database
        const newUser = await UserModel.create({ username, designation, email, password });
        res.status(201).json({ success: true, message: "User created successfully" });
    } catch (error) {
        console.error("Error during user creation:", error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

// Display All Users
const userDisplay = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ msg: "Failed to fetch users" });
    }
};

// Assign Task Handler
const taskAssignSave = async (req, res) => {
    const { empid, tasktitle, taskdescription, compdays } = req.body;
    try {
        const task = await TaskModel.create({ empid, tasktitle, taskdescription, completiondays: compdays });
        res.status(201).json({ msg: "Task assigned successfully", task });
    } catch (error) {
        console.error("Error assigning task:", error);
        res.status(500).json({ msg: "Failed to assign task" });
    }
};

// Generate User Report
const userReport = async (req, res) => {
    try {
        const tasks = await TaskModel.find().populate("empid");
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error generating user report:", error);
        res.status(500).json({ msg: "Failed to generate report" });
    }
};

// Reassign Task
const taskReAssign = async (req, res) => {
    const { taskid } = req.body;
    try {
        await TaskModel.findByIdAndUpdate(taskid, { empreport: 'pending' });
        res.status(200).json({ msg: "Task successfully reassigned" });
    } catch (error) {
        console.error("Error reassigning task:", error);
        res.status(500).json({ msg: "Failed to reassign task" });
    }
};

module.exports = {
    adminLogin,
    createUser,
    userDisplay,
    taskAssignSave,
    userReport,
    taskReAssign
};
