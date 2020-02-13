const express = require('express')
const cors = require('cors')
let db = require('./db.js')

const app = express()
app.use(cors())

app.listen(4000, err => {
	if (err) {
		console.log(err)
	} else {
		console.log('Server running')
	}
})
