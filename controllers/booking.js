const Room = require('../models/rooms')

// get bboking
const getBookings = async (req, res) => {
	try {
		const bookedRooms = await Room.find({ isBooked: true })

		res.status(200).send(bookedRooms)
	} catch (error) {
		res.status(500).send('Internal Server Error: ' + error.message)
	}
}

// New booking
const createBookings = async (req, res) => {
	try {
		const { customerName, Date, startTime, endTime, roomID } = req.body

		const room = await Room.findOne({ _id: roomID }).lean()
		if (room.isBooked) return res.status(400).send('Already booked')

		await Room.updateOne(
			{ _id: roomID },
			{ customerName, Date, startTime, endTime, isBooked: true }
		)
	} catch (error) {
		res.status(500).send('Internal Server Error:' + error.message)
	}
}
module.exports = { getBookings, createBookings }