const db = require('../db')

// Product index
module.exports.addToCart = (req, res) => {
    var productId = req.params.productId
    var sessionId = req.signedCookies.sessionId

    var count = db.get('session')
        .find({id: sessionId})
        .get('cart.' + productId, 0)
        .value()

    db.get('session')
        .find({id: sessionId})
        .set('cart.' + productId, count+1)
        .write()
    res.redirect('back')
}