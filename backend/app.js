const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
const adminRoute= require("./routes/adminRoute");
const bodyparser = require('body-parser');
mongoose.connect("mongodb://127.0.0.1:27017/pm6task").then(()=>{
    console.log("DB connected!");
})
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/admin", adminRoute);



app.listen(8080, ()=>{
    console.log("Server run on 8080 port!");
})