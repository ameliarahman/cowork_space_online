const express = require('express')
const router = express.Router()
const Model = require('./../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images' })
const fs = require("fs");
const Sequelize = require('sequelize')
const op = Sequelize.Op

router.get('/', function (req, res) {
    Model.Room.findAll({
        limit: 4
    }).then((dataRooms) => {
        res.render('index/index', { pageTitle: 'Home', dataRooms: dataRooms })
    }).catch((reason) => {
        res.redirect('/')
    })
    //res.render('index', { pageTitle: 'Home' })
})

router.get('/details/:id', function (req, res) {
    Model.Room.findById(req.params.id).then((dataRoom) => {
        res.render('index/details', { pageTitle: "Detail Room", dataRoom: dataRoom })
    }).catch((reason) => {
        res.send(reason)
    })
})


module.exports = router