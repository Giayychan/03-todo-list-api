const router = require('express').Router()
const Items = require('../models/items.js')

router.post('/', (req, res) => {
	Items.create(req.body).then(data => {
		res.send(data)
	})
})

router.get('/', (req, res) => {
	Items.find({}).then(data => {
		res.send(data)
	})
})

router.patch('/:id', (req, res) => {
	Items.findByIdAndUpdate(req.params.id, { name: 'Sleeping' }, { new: true }).then(data => {
		res.send(data)
	})
})

router.delete('/:id', (req, res) => {
	Items.findByIdAndDelete(req.params.id).then(data => {
		res.send(data)
	})
})

module.exports = router
