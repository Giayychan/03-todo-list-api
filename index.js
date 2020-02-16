const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db.js')
require('dotenv').config()
let port = process.env.PORT

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/items', require('./controllers/items'))

app.listen(port, err => {
	if (err) {
		console.log(err)
	} else {
		console.log(`Server running on port ${port}`)
	}
})
