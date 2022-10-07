const express = require('express')
const router = express.Router()
const { getBookings, createBookings } = require('../controllers/booking')

//Get bookins
router.get('/', getBookings)
router.post('/book', createBookings)

module.exports = router