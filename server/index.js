const express = require("express");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
// const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
//bodyParser provides four express middleware for parsing JSON, Text, URL-encoded

//connect to db 
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology :  true, useNewUrlParser : true},
    () => console.log("connected to db")
);

//import Routes
// const dataRoute = require("./routes/data");

// // // Middlewares
// app.use(cors());
// app.use(express.json("/data", dataRoute));


app.use(bodyParser.urlencoded({extended: false }))
app.use(express.json())


app.listen(4000, ()=>{console.log(
    "running on port 4000"
)})