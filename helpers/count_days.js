'use strict'

function countDay(from, to){
	let day_from = from.split('/'),
		day_to = to.split('/'),
		count = day_to[0] - day_from[0]

	return count

}


module.exports = countDay