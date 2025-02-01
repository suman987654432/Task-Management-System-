const mongoose = require("mongoose");
const emptaskSchema = new mongoose.Schema({
    tasktitle: String,
    taskdescription: String,
    completiondays: String,
    taskstatus: {
        type: String, // Number type
        default: "No Completed",
      },
    empreport:{
        type: String, // Number type
        default: "pending",
    } ,
    empid: { type: mongoose.Types.ObjectId, ref: "user" }
})

module.exports = mongoose.model("emptask", emptaskSchema);