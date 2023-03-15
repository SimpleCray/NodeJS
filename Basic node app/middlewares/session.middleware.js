const db = require('../db')
//Auto generate ID
const shortid = require('shortid')

module.exports.session = (req, res, next) => {
    if (!req.signedCookies.sessionId){
        var sessionId = shortid.generate()
        res.cookie('sessionId', sessionId, {signed: true})
        db.get('session').push({id: sessionId}).write()
    }

    var sessionId = req.signedCookies.sessionId
    //Array contains all product in cart
    var cartProducts = db.get('session')
    .find({id: sessionId})
    .get('cart')
    .value()
    //console.log(cartProducts)
    var productsInCart = 0
    for (const [key, value] of Object.entries(cartProducts)) {
        //console.log(key, value);
        productsInCart+=value
    }
    res.locals.productsInCart = productsInCart
    console.log(productsInCart)
    next()
}