const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require("nodemailer");

require('dotenv').config();

const PORT = process.env.PORT || 11000;
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection Success!');
});

app.use('/api/emailService', require('./routes/emailRoute'))

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});