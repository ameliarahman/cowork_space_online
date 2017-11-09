const express = require('express')
const router = express.Router()
const models = require('../models')
const decript = require('../helpers/decript')


router.get('/', (req, res) => {
	res.render('login/login', { pageTitle: 'Login First' })

})

router.post('/', (req, res) => {

	models.User.findOne({
		where: {
			username: req.body.username
		}

	}).then(user => {

		if (user) {
			decript(req.body.password, user.password).then(hasil => {
				if (hasil) {
					req.session.user_id = user.id
					req.session.username = user.username
					req.session.email = user.email
					req.session.level = user.level
					req.session.isLogin = true
					res.redirect('/')
				}
				else {
					res.render('login/login', { pageTitle: 'Login First' })
				}
			})
		}
		else {
			res.render('login/login', { pageTitle: 'Login First' })
		}

	}).catch(error => {
		res.send(error)
	})
})

router.get('/logout', function (req, res, next) {
	req.session.destroy()
	res.redirect('/login');
});



module.exports = router