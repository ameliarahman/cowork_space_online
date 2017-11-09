const express = require('express')
const router = express.Router()
const models = require('../models')
const encript = require('../helpers/encript')

router.get('/', (req, res) => {
	if (req.session.level == 1) {
		models.User.findAll().then(users => {
			// res.send(users)
			res.render('users/list', { users, pageTitle: "Data Users", Session: req.session })
		})
	} else if (req.session.level == 2 || req.session.level == 3) {
		models.User.findAll({
			where: {
				id: req.session.user_id
			}
		}).then(users => {
			// res.send(users)
			res.render('users/list', { users, pageTitle: "Data Users", Session: req.session })
		})
	}

})

router.get('/delete/:id', (req, res) => {
	models.User.destroy({
		where: { id: req.params.id }
	})
		.then(() => {
			res.redirect('/users')
		})
})

router.get('/edit/:id', (req, res) => {
	models.User.findById(req.params.id).then(user => {
		res.render('users/edit', { user, pageTitle: "Edit Users", Session: req.session })
	})

})

router.post('/edit/:id', (req, res) => {
	models.User.update({
		username: req.body.username,
		password: req.body.password,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		no_telp: req.body.no_telp,
		level: req.body.level

	}, {
			where: { id: req.params.id }
		})
		.then(() => {
			res.redirect('/users')
		})
})


router.get('/signup', (req, res) => {
	res.render('login/signup', { pageTitle: "Signup", Session: req.session })
})

router.post('/signup', (req, res) => {

	encript(req.body.password).then(hasil => {
		models.User.create({
			username: req.body.username,
			password: hasil,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			no_telp: req.body.no_telp,
			level: req.body.level
		}).then(() => {
			res.redirect('/login')
		})
	})
})

module.exports = router