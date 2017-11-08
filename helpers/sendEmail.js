const nodemailer = require('nodemailer');

module.exports = function (data) {
    //console.log(data)
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'coworkspace.online@gmail.com', // Your email id
            pass: 'amelipungfase1' // Your password
        }
    });

    let HelperOptions = {
        from: 'coworkspace.online@gmail.com',
        to: `${data.email}`,
        Subject: "Invoice Booking Co-working Space",
        text: `Nyoba dulu yoooo ${data.first_name} ${data.last_name} !!!`
    }

    transporter.sendMail(HelperOptions, (err, info) => {
        if (err) {
            return console.log(err)
        } else {
            console.log("Message was sent!")
        }
    })
}