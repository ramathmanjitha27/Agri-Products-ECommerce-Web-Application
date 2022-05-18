const express = require('express')
const emailSchema = require('../modules/emailModule')
const nodemailer = require("nodemailer");



const confirmPayment = async (req, res) => {

    const emailTemplate = `
    <h2>With the email ${req.body.customerEmailAddress}  you have paid something from <b>Agri Products</b></h2>
    <p>You need to enter the following code to confirm your payment</p>
    <p>code : <h1 style="background-color: aquamarine; padding: 5px; width: fit-content">${req.body.confirmationCode}</h1></p>
`

    async function main() {
        let transporter = nodemailer.createTransport({
            name: 'smtp.gmail.com',
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SENT_EMAIL, // generated ethereal user
                pass: process.env.SENT_PWD, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Agri Products" <process.env.SENT_EMAIL>', // sender address
            to: req.body.customerEmailAddress, // list of receivers
            subject: "Payment Confirmation", // Subject line
            // text: "Hello world?", // plain text body
            // html: "<b>Hello world, this is from controller files</b>", // html body
            html: emailTemplate
        });

        console.log("Message sent: %s", info.messageId);

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    }

    main().then(() => console.log("successfully called"))


    try{
        const result = await emailSchema.create({
            customerEmailAddress: req.body.customerEmailAddress,
            confirmationCode: req.body.confirmationCode,
            amount: req.body.amount
        })
        res.status(200).json(result)

    }catch (err){
        console.log(err)
        console.log("Payment confirmation is not success!")
    }
}

//view payment info for a given email address
const viewConfirmEmail = async (req, res) => {
    const email = req.body.email;
    try{
        const results = await emailSchema.find({email})
        res.status(200).json(results);
    }catch (err){
        console.log("View mobile payment is not success")
        res.status(500).json(err)
    }
}

module.exports = {confirmPayment, viewConfirmEmail}