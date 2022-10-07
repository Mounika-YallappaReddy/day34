const express = require('express')
const router = express.Router()
const path = require('path')
const getHome = (req, res) => {
	return res.status(200).sendFile(path.join(__dirname, '/index.html'))
}

router.get('/', getHome)

module.exports = router