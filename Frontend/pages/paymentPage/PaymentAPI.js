import axios from 'axios'

export const confirmEmail = async (data) => {

    console.log(data)

    const response = await  axios.post('http://localhost:11000/api/emailService/confirmEmail', data)
        .then((res) => console.log(res))
}

export const confirmSms = async (data) => {
    const response = await  axios.post('', data)
        .then((res) => console.log(res))
}

//payment success
export const paymentSuccess = async (data) => {
    const response = await  axios.post('http://localhost:9000/api/creditCard/makePayment', data)
        .then((res) => console.log(res))
}