const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('1234567890', 10)

const Room = require('../models/rooms')

// Get rooms list
const getRooms = async (req, res) => {
	try {
		const rooms = await Room.find()
		res.status(200).json({ message: 'Rooms fetched successfully', rooms })
	} catch (error) {
		res.status(500).json({ error: 'Error getting rooms' })
	}
}

// Create a new room
const createRoom = async (req, res) => {
	try {
		const { seats, amenities, pricePerHour } = req.body
		let generatedRoomNumber = nanoid(3)
		if (Room.findOne({ roomName: generatedRoomNumber }))
			generatedRoomNumber = nanoid(3)
		const room = await Room.create({
			seats,
			amenities,
			pricePerHour,
			roomName: generatedRoomNumber,
		})
		room.save()
		console.log(room)
		res.status(201).send({ message: 'Room created successfully', room })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Error creating room' })
	}
}

module.exports = { getRooms, createRoom }