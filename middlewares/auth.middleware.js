const db = require('../db')
module.exports.loginAuth = (req, res, next) => {
    if (!req.signedCookies.user){
        res.render('users/login')
    }
    var user = db.get('users').find({id: req.signedCookies.user}).value()
    if (!user){
        res.render('users/login')
    }
    res.locals.loggedUser = user
    next()
}