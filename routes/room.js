const express = require('express')
const router = express.Router()
const { getRooms, createRoom } = require('../controllers/room')

//Get rooms
router.get('/', getRooms)
router.post('/create', createRoom)

module.exports = router