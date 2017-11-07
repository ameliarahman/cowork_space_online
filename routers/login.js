const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    res.render('login/login', { pageTitle: 'Login First' })
})

router.post('/', (req, res) =>{
	
})


module.exports = router