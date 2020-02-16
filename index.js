const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
let db = require('./db.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/items', require('./controllers/items'))

app.listen(4000, err => {
	if (err) {
		console.log(err)
	} else {
		console.log('Server running')
	}
})
