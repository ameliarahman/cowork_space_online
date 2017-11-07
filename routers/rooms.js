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

router.get('/edit/:id', function (req, res) {
    Model.Room.findById(req.params.id).then((dataRoom) => {
        //console.log(dataRoom)
        res.render('rooms/edit', { dataRoom: dataRoom, pageTitle: "Edit Room" })
    }).catch((reason) => {
        res.redirect('/rooms')
    })
})

router.post('/edit/:id', upload.single('room_pict'), function (req, res) {
    if (req.file) {
        Model.Room.update({
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            capacity: req.body.capacity,
            facility: req.body.facility,
            photo_url: req.file.filename,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
                where: {
                    id: req.params.id
                }
            }).then(() => {
                res.redirect('/rooms')
            }).catch((reason) => {
                res.redirect(`/edit/${req.params.id}`)
            })
    } else {
        //console.log("Haloooooooooooooooooooooooooooooooo")
        Model.Room.findById(req.params.id).then((dataRoom) => {
            let pict = dataRoom.photo_url
            Model.Room.update({
                name: req.body.name,
                address: req.body.address,
                city: req.body.city,
                capacity: req.body.capacity,
                facility: req.body.facility,
                photo_url: pict,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(() => {
                    res.redirect('/rooms')
                }).catch((reason) => {
                    res.redirect(`/edit/${req.params.id}`)
                })
        })
    }
    // console.log(req.body)

})

router.get('/delete/:id', function (req, res) {
    Model.Room.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/rooms')
    }).catch((reason) => {
        res.send(reason)
    })
})




module.exports = router