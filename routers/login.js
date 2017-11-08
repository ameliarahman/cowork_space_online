const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'ayam';

bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    console.log(hash)
});

router.get('/', (req, res)=> {
    res.render('login/login', { pageTitle: 'Login First' })
})

router.post('/', (req, res) =>{
	
})


module.exports = router