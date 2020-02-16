let mongoose = require('mongoose')
require('dotenv').config()
let database = process.env.DATABASE

module.exports = mongoose.connect(
	database,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	err => {
		err ? console.log(err) : console.log('Connected to MongoDB')
	}
)
