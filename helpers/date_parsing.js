'use strict'

function dateParsing(date){
	console.log(date)
	let parser = date.split('/')

	let dates = new Date(parser[2], parser[1]-1, parser[0])
	return dates
}

module.exports = dateParsing