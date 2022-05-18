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


// async function main() {
//
//     var transporter = await nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'lyricson55@gmail.com',
//             pass: '199919on'
//         }
//     });
//
//     var mailOptions = {
//         from: 'lyricson55@gmail.com',
//         to: 'subodalahiru68@gmail.com',
//         subject: 'Sending Email using Node.js',
//         text: 'That was easy!'
//     };
//
//     await transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log("called from the error")
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// }
//
//
// main().then(() => console.log("successfully called"))
































app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});