const mongoose = require("mongoose");
const emptaskSchema = new mongoose.Schema({
    tasktitle: String,
    taskdescription: String,
    completiondays: String,
    empid: { type: mongoose.Types.ObjectId, ref: "user" }
})

module.exports = mongoose.model("emptask", emptaskSchema);