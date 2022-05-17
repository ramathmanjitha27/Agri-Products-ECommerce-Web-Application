const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// const passport = require('passport');

require('dotenv').config();
const PORT = process.env.PORT || 7000;
app.use(cors());
// app.use(bodyParser.json());
const URL = process.env.MONGODB_URL;
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection Success!');
});

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});
//routes

