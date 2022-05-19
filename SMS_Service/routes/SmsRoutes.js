const express = require('express')
const router = express.Router()
const OTPConfirmController = require('../controller/SmsController')

router.post('/confirmOTP', OTPConfirmController.confirmOTP)
router.get('/viewConfirmedEmail', OTPConfirmController.viewConfirmedSMS)

module.exports = router;