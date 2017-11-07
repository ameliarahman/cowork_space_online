var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'ayam';

bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    console.log(hash)
});