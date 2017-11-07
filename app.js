const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const users = require('./routers/users')
const index = require('./routers/index')
const room = require('./routers/rooms')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use('/', index)
app.use('/rooms', room)

app.use('/users', users)


app.listen(3000)