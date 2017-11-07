const express = require('express')
const router = express.Router()
const Model = require('./../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images' })
const fs = require("fs");


router.get('/', function (req, res) {
    Model.Room.findAll().then((dataRooms) => {
        // console.log(dataRooms)
        res.render('rooms/room', { dataRooms: dataRooms, pageTitle: 'Co-working Space' })
    })
})

router.get('/add', function (req, res) {
    res.render('rooms/add', { pageTitle: 'Add Space' })
})

router.post('/add', upload.single('room_pict'), function (req, res) {

    if (req.file) {
        // let filePicture;
        // switch (req.file.mimetype) {
        //     case 'image/jpeg':
        //         filePicture = req.file.filename + '.jpeg'
        //         break;
        //     case 'image/png':
        //         filePicture = req.file.filename + '.png'
        //         break;
        //     default:
        //         break;
        // }

        console.log(req.file, "====", req.body)
        Model.Room.create({
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            capacity: req.body.capacity,
            facility: req.body.facility,
            photo_url: req.file.filename,
            price: req.body.price,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(() => {
            res.redirect('/rooms')
        })
    } else {
        Model.Room.create({
            address: req.body.address,
            city: req.body.city,
            capacity: req.body.capacity,
            facility: req.body.facility,
            photo_url: `default.png`,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(() => {
            res.redirect('/rooms')
        })
    }
})

router.get('/edit', function (req, res) {

})

router.post('/edit', function (req, res) {

})


module.exports = router