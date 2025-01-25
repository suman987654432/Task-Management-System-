const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure unique emails
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("user", userSchema);