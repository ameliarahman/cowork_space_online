const express = require('express')
const router = express.Router()
const Model = require('./../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images' })
const fs = require("fs");


router.get('/', function (req, res) {
    if (req.session.level == 1) {
        Model.Room.findAll().then((dataRooms) => {
            // console.log(dataRooms)
            res.render('rooms/room', { dataRooms: dataRooms, pageTitle: 'Co-working Space', Session: req.session })
        })
    } else if (req.session.level == 3) {
        console.log("Halooooo apakah masuk sini?")
        Model.Room.findAll({
            where: {
                UserId: req.session.user_id
            }
        }).then((dataRooms) => {
            // console.log(dataRooms)
            res.render('rooms/room', { dataRooms: dataRooms, pageTitle: 'Co-working Space', Session: req.session })
        })
    }

})

router.get('/add', function (req, res) {
    res.render('rooms/add', { pageTitle: 'Add Space', Session: req.session })
})

router.post('/add', upload.single('room_pict'), function (req, res) {

    if (req.file) {
        //console.log(req.file, "====", req.body)
        Model.Room.create({
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            capacity: req.body.capacity,
            facility: req.body.facility,
            photo_url: req.file.filename,
            price: req.body.price,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: req.session.user_id
        }).then(() => {
            res.redirect('/rooms')
        })
    } else {
        Model.Room.create({
            address: req.body.address,
            city: req.body.city,
            capacity: req.body.capacity,
            facility: req.body.facility,
            price: req.body.price,
            photo_url: `default.png`,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: req.session.user_id
        }).then(() => {
            res.redirect('/rooms')
        })
    }
})

router.get('/edit/:id', function (req, res) {
    Model.Room.findById(req.params.id).then((dataRoom) => {
        //console.log(dataRoom)
        res.render('rooms/edit', { dataRoom: dataRoom, pageTitle: "Edit Room", Session: req.session })
    }).catch((reason) => {
        res.redirect('/rooms')
    })
})

router.post('/edit/:id', upload.single('room_pict'), function (req, res) {
    if (req.file) {
        Model.Room.update({
            name: req.body.name,
            price: req.body.price,
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
                price: req.body.price,
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

//         console.log(req.session)
//         res.render('index/details', { pageTitle: "Detail Room", dataRoom: dataRoom, Session: req.session })

//     }).catch((reason) => {
//         res.send(reason)
//     })
// })


router.post('/details/:id', (req, res) => {
    Model.Room.findById(req.params.id).then((dataRoom) => {
        //console.log(dataRoom, "sess", req.session, "body", req.body)
        //kerjaanku sampe sini yaa

    })
    //console.log(req.session, '======', req.body)
})




module.exports = router