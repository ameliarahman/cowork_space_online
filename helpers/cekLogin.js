const session = require('express-session')
module.exports = function checkLogin(req, res, next) {
    if (req.session.loggedIn) {
        next()
    } else {
        res.redirect('/login')
    }
}