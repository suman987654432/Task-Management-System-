const mongoose = require("mongoose");
const emptaskSchema = new mongoose.Schema({
    tasktitle: String,
    taskdescription: String,
    completiondays: String,
    empid: { type: mongoose.Types.ObjectId, ref: "employee" }
})

module.exports = mongoose.model("emptask", emptaskSchema);