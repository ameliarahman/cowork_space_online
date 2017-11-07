const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (req, res) =>{
	models.User.findAll().then(users=> {
		res.render('users/list', {users})
	})
})


module.exports = router