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
const countDay = require('./../helpers/count_days')
const countPrice = require('./../helpers/count_price')
const dateParsing = require('./../helpers/date_parsing')


function checkLogin(req, res, next) {
	if (req.session.isLogin) {
		next()
	} else {
		res.redirect('/login')
	}
}
router.get('/',checkLogin, function (req, res) {
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

router.get('/:id',checkLogin, function (req, res) {
    Model.Room.findById(req.params.id).then((dataRoom) => {
        res.render('rentals/booking', { pageTitle: "Booking", dataRoom: dataRoom, })
    })
})


///Send Email ada di rentals
// router.post('/:id', function (req, res) {

//     res.redirect('/booking')
// })


router.get('/details/:id',checkLogin, function (req, res) {
    Model.Room.findById(req.params.id).then((dataRoom) => {

        if (req.query.username) {


            Model.User.findById(req.session.user_id).then(user => {
                user.count_booking_date = countDay(req.query.from_date, req.query.to_date)
                user.price = countPrice(user.count_booking_date, dataRoom.price)
                user.from_date = req.query.from_date
                user.to_date = req.query.to_date


                req.session.onBooking = true
                req.session.RoomId = req.params.id
                res.render('index/details', { pageTitle: "Detail Room", dataRoom: dataRoom, Session: req.session, user })
            })
        }
        else {
            res.render('index/details', { pageTitle: "Detail Room", dataRoom: dataRoom, Session: req.session })

        }

    }).catch((reason) => {
        res.send(reason)
    })
})

router.post('/details/:id', (req, res) => {
    // res.send(req.session.RoomId)
    Model.Rental.create({
        UserId: req.session.user_id,
        RoomId: req.session.RoomId,
        from_date: dateParsing(req.body.from_date),
        to_date: dateParsing(req.body.to_date),
        status: 'booked',
        price_total: req.body.price_total
    }).then(() => {
        sendEmail(req.body)
        res.redirect('/')
    })
})



module.exports = router