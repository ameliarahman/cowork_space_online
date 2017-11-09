const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');


app.listen(process.env.PORT || '3000')