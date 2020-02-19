const mongoose = require('mongoose')

module.exports = mongoose.model('items', {
	name: { type: String, required: true },
	done: { type: Boolean, default: false }
})
