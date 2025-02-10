const bcrypt = require("bcryptjs"); // Import bcrypt for secure password handling
const EmpModel = require("../models/userModel");
const TaskModel = require("../models/taskModel");

const emploginCheck = async (req, res) => {
    const { userid, password } = req.body;
    try {
        if (!userid || !password) {
            return res.status(400).send({ msg: "Email and Password are required!" });
        }

        const employee = await EmpModel.findOne({ email: userid });
        if (!employee) {
            return res.status(400).send({ msg: "Invalid Email!" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, employee.password);
        if (!isMatch) {
            return res.status(400).send({ msg: "Invalid Password!" });
        }

        res.status(200).send(employee);
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

const empTaskDisplay = async (req, res) => {
    const { empid } = req.body;
    try {
        if (!empid) {
            return res.status(400).send({ msg: "Employee ID is required!" });
        }

        const tasks = await TaskModel.find({ empid });
        res.status(200).send(tasks);
    } catch (error) {
        console.error("Task Display Error:", error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

const empTaskSubmit = async (req, res) => {
    const { taskid, taskstatus } = req.body;
    try {
        if (!taskid || !taskstatus) {
            return res.status(400).send({ msg: "Task ID and Status are required!" });
        }

        const updatedTask = await TaskModel.findByIdAndUpdate(taskid, { 
            taskstatus, 
            empreport: "submitted" 
        }, { new: true });

        if (!updatedTask) {
            return res.status(404).send({ msg: "Task not found!" });
        }

        res.status(200).send({ msg: "Task successfully submitted!" });
    } catch (error) {
        console.error("Task Submit Error:", error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        if (!email || !newPassword) {
            return res.status(400).send({ msg: "Email and New Password are required!" });
        }

        let user = await EmpModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ msg: "User not found!" });
        }

        // Hash the new password before saving
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();

        res.status(200).send({ msg: "Password reset successful!" });
    } catch (error) {
        console.error("Reset Password Error:", error);
        res.status(500).send({ msg: "Error resetting password" });
    }
};

module.exports = {
    emploginCheck,
    empTaskDisplay,
    empTaskSubmit,
    resetPassword
};
