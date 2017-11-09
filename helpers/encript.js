const bcrypt = require('bcrypt');

function encript(myPlaintextPassword){

	const saltRounds = 10;


	return new Promise((resolve, reject)=> {
		bcrypt.hash(myPlaintextPassword, saltRounds).then((hash)=> {
    	resolve(hash)
		});
	})
	

}


module.exports = encript
