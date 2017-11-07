const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (req, res) =>{
	models.User.findAll().then(users=> {
		res.render('users/list', {users, pageTitle:"Data Users"})
	})
})

router.get('/delete/:id', (req, res)=> {
	models.User.destroy({
		where : {id : req.params.id}
	})
	.then(() => {
		res.redirect('/users')
	})
})

router.get('/edit/:id', (req, res)=> {
	models.User.findById(req.params.id).then(user =>{
		res.render('users/edit', {user, pageTitle:"Edit Users"})
	})

})

router.post('/edit/:id', (req, res) =>{
	models.User.update({
			username : req.body.username,
			password : req.body.password,
			first_name : req.body.first_name,
			last_name : req.body.last_name,
			email : req.body.email,
			no_telp : req.body.no_telp
		},{
			where: {id : req.params.id}
		})
	.then(() => {
		res.redirect('/users')
	})
})


module.exports = router