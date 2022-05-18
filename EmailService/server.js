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


async function main() {

    let transporter = nodemailer.createTransport({
        name: 'smtp.gmail.com',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "lyricson55@gmail.com", // generated ethereal user
            pass: "199919on", // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        },

    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Agri products" <lyricson55@gmail.com>', // sender address
        to: "subodalahiru68@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: "<b>Hello world? how are you</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}


main().then(() => console.log("successfully called"))
































app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});