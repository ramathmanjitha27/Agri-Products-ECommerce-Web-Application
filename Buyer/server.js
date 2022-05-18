const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

require('dotenv').config();

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());


ongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success");
})

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});

