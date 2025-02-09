require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const Port = process.env.PORT || 8080;
const db = process.env.DB_URL;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected!"))
    .catch(err => console.error("DB connection error:", err));

// Routes
const adminRoute = require("./routes/adminRoute");
const empRoute = require("./routes/employeeRoutes");

app.use("/admin", adminRoute);
app.use("/employee", empRoute);

// Start Server
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
