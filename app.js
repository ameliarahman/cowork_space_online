const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const index = require('./routers/index')
const room = require('./routers/rooms')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use('/', index)
app.use('/rooms', room)


app.listen(3000)