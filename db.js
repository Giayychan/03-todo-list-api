const mongoose = require('mongoose')
const database = process.env.DATABASE

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
