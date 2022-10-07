const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema(
	{
		roomName: {
			type: 'string',
			unique: true,
		},
		seats: {
			type: String,
			required: true,
			trim: true,
		},
		amenities: {
			type: Array,
			required: true,
		},
		pricePerHour: {
			type: String,
			required: true,
		},
		isBooked: {
			type: Boolean,
			default: false,
		},
		customerName: {
			type: String,
			default: '',
		},
		startTime: {
			type: String,
			default: '',
		},
		endTime: {
			type: String,
			default: '',
		},
		Date: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Room', roomSchema)