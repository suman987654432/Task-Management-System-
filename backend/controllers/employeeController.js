const EmpModel = require("../models/userModel")
const TaskModel = require("../models/taskModel")
const emploginCheck = async (req, res) => {
    const { userid, password } = req.body;
    try {
        const Employee = await EmpModel.findOne({ email: userid });
        if (!Employee) {
            res.status(400).send({ msg: "Invalid Email!!!" });
        }
        if (Employee.password != password) {
            res.status(400).send({ msg: "Invalid Password!!!" });
        }
        res.status(200).send(Employee);
    } catch (error) {
        console.log(error);
    }
}

const empTaskDisplay = async (req, res) => {
    const { empid } = req.body;
    try {
        const Task = await TaskModel.find({ empid: empid })
        res.status(200).send(Task)
    } catch (error) {
        console.log(error)
    }
}

const empTaskSubmit = async (req, res) => {
    const { taskid, taskstatus } = req.body;
    try {
        const Task = await TaskModel.findByIdAndUpdate(taskid, { taskstatus: taskstatus, empreport: "submited" });
        res.status(200).send("Task Successfully submited!");

    } catch (error) {
        console.log(error);
    }


}

const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        let user = await EmpModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ msg: "User not found!" });
        }

        user.password = newPassword; // Update password
        await user.save();

        res.status(200).send({ msg: "Password reset successful!" });
    } catch (error) {
        res.status(500).send({ msg: "Error resetting password" });
    }
};







module.exports = {
    emploginCheck,
    empTaskDisplay,
    empTaskSubmit,
    resetPassword
}