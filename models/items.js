const mongoose = require('mongoose')

module.exports = mongoose.model('Items', {
	name: { type: String, required: true },
	done: { type: Boolean, default: false }
})
