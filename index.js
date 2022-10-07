const express = require('express')
const mongoose = require('mongoose')
const port = 8000

const dotenv = require('dotenv')
dotenv.config()

const app= express()
app.use(express.json())

// home route
const home = require('./routes/home')

app.use('/', home)

// room route
const room = require('./routes/room')
app.use('/rooms', room)

// book route
const booking = require('./routes/booking')
app.use('/bookings', booking)

mongoose.connect(process.env.MONGODBURL)

app.listen(port, () => console.log('connected to port' + port))