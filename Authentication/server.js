const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


require('dotenv').config();

const PORT = process.env.PORT || 7350;

app.use(cors());
// app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection Success!');
});

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
const userRouter = require("./routes/userRoutes");
app.use("/api/users", userRouter);


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});






// const express = require('express')
// const dotenv = require('dotenv').config()
// // const {errorHandler} = require('./middleware/errorMiddleware')
// const connectDB = require('./config/db')
// const port = process.env.PORT || 7350
//
// connectDB()
//
// const app = express()
//
// // app.get('/api/goals', (req, res) => {
// //     res.status(200).json({message: 'Get goals'})
// // })
//
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
//
//
// app.use('/api/users', require('./routes/userRoutes'))
//
// // app.use(errorHandler)
//
// app.listen(port, () => console.log(`Server started on port ${port}`))

