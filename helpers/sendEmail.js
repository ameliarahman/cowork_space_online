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
        text: `
            Nama : ${data.first_name} ${data.last_name} 
            Email : ${data.email}  
            No Telp : ${data.no_telp}
            From Date : ${data.from_date}
            To Date : ${data.to_date} 
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