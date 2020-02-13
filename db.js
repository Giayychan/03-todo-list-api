let mongoose = require('mongoose')

module.exports = mongoose.connect(
	'mongodb://localhost:27017/todo-list',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	err => {
		err ? console.log(err) : console.log('Connected to MongoDB')
	}
)
