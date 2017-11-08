const bcrypt = require('bcrypt');

function decript(myPlaintextPassword, hash){

	const saltRounds = 10;


	return new Promise((resolve, reject)=> {
		bcrypt.compare(myPlaintextPassword, hash).then((hasil)=> {
    	resolve(hasil)
		});
	})
	

}


module.exports = decript