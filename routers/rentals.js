const express = require('express')
const router = express.Router()
const Model = require('./../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images' })
const fs = require("fs");
const Sequelize = require('sequelize')
const op = Sequelize.Op
const nodemailer = require('nodemailer');
const sendEmail = require('./../helpers/sendEmail')

router.get('/', function (req, res) {
    res.render('rentals/show', { pageTitle: 'Booking', dataRooms: '', Session: req.session })
})

router.post('/search', function (req, res) {
    // res.send(req.body)
    Model.Room.findAll({
        where: {
            city: {
                [op.like]: `%${req.body.city}%`
            }
        }
    }).then((dataRooms) => {
        res.render('rentals/show', { pageTitle: 'Booking', dataRooms: dataRooms, Session: req.session })
    }).catch((reason) => {
        res.send(reason)
    })

})

router.get('/:id', function (req, res) {
    Model.Room.findById(req.params.id).then((dataRoom) => {
        res.render('rentals/booking', { pageTitle: "Booking", dataRoom: dataRoom,  })
    })
})

router.post('/:id', function (req, res) {
    sendEmail(req.body)
    res.redirect('/booking')
})


router.post('/details/:id', (req, res) => {
    Model.Rental.create({

    })
})

router.get('/details/:id', function (req, res) {
    Model.Room.findById(req.params.id).then((dataRoom) => {

        console.log(req.query.username)
        if(req.query.username){
           
            Model.User.findById(req.session.user_id).then(user =>{
                req.session.onBooking = true
                 console.log(req.session)
                res.render('index/details', { pageTitle: "Detail Room", dataRoom: dataRoom, Session : req.session, user })
            })

        }
        else{
            console.log('masuk else')
            res.render('index/details', { pageTitle: "Detail Room", dataRoom: dataRoom, Session : req.session })

        }

    }).catch((reason) => {
        res.send(reason)
    })
})



module.exports = router