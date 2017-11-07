const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const users = require('./routers/users')
const index = require('./routers/index')
const room = require('./routers/rooms')
const login = require('./routers/login')
const app = express()

app.use( express.static(__dirname + '/public') );
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.use('/login', login)
app.use('/', index)
app.use('/rooms', room)
app.use('/users', users)


app.listen(3000)