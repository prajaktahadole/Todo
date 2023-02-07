const express = require("express");

const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//connect to db 

mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology :  true, useNewUrlParser : true},
    () => console.log("connected to db")
);


app.listen(4000, ()=>{console.log(
    "running on port 4000"
)})