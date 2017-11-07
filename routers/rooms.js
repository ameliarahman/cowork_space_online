const express = require('express')
const router = express.Router()
const Model = require('./../models')

router.get('/', function (req, res) {
    Model.Room.findAll().then((dataRooms) => {
        res.render('rooms/room', { dataRooms: dataRooms, pageTitle: 'Co-working Space' })
    })
})

router.get('/add', function (req, res) {

})

router.post('/add', function (req, res) {

})

router.get('/edit', function (req, res) {

})

router.post('/edit', function (req, res) {

})


module.exports = router