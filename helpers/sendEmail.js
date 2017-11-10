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
        subject: "Invoice Booking Co-working Space",
        html: `
            <h2> Invoice Booking Co-working Space </h2>
            <br>
            Nama : ${data.first_name} ${data.last_name} <br> 
            Email : ${data.email}  <br>
            No Telp : ${data.no_telp} <br>
            From Date : ${data.from_date} <br>
            To Date : ${data.to_date} <br>
            Price Total : ${data.price_total}
            `
    }

    transporter.sendMail(HelperOptions, (err, info) => {
        if (err) {
            return console.log(err)
        } else {
            console.log("Message was sent!")
        }
    })
}