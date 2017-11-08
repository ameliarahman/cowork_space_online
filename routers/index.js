const express = require('express')
const router = express.Router()
const Model = require('./../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images' })
const fs = require("fs");
const Sequelize = require('sequelize')
const op = Sequelize.Op

router.get('/', function (req, res) {
	console.log(req.session)
    Model.Room.findAll({
        limit: 4
    }).then((dataRooms) => {
        // res.send(dataRooms)
        res.render('index/index', { pageTitle: 'Home', dataRooms: dataRooms })
    }).catch((reason) => {
        res.redirect('/')
    })

    // res.render('index/index', { pageTitle: 'Home' })
})



module.exports = router