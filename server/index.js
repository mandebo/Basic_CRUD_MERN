const express = require('express')


const app = express()
const mongoose = require('mongoose')

const UserModel = require('./models/Users')
const connectDb = require('./config/dbConnection')
const cors = require('cors')





//setup connection with database
connectDb();
app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));


app.listen(3001, () => {
    console.log('You are connected');
})