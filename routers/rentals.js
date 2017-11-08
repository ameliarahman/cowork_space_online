const express = require('express')
const router = express.Router()
const Model = require('./../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images' })
const fs = require("fs");
const Sequelize = require('sequelize')
const op = Sequelize.Op

router.get('/', function (req, res) {
    res.render('rentals/show', { pageTitle: 'Booking', dataRooms: '' })
})

router.post('/', function (req, res) {
    Model.Room.findAll({
        where: {
            city: {
                [op.like]: `%${req.body.city}%`
            }
        }
    }).then((dataRooms) => {
        res.render('rentals/show', { pageTitle: 'Booking', dataRooms: dataRooms })
    }).catch((reason) => {
        res.send(reason)
    })

})

module.exports = router