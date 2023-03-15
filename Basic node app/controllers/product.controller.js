const db = require('../db')
//MD5
const md5 = require('md5')

// Product index
module.exports.index = (req, res) => {
    var products = db.get('products').value()
    var currentIndex = req.params.index;
    var indexCount = []
    var index
    for ( index = 1; index <= products.length/6; index++) {
        indexCount.push(index)
    }
    if(products.length%3!=0){
        indexCount.push(index)
    }
    console.log(indexCount)
    var start = (currentIndex-1)*6
    var end = currentIndex*6
    console.log('Start: ' + start + '. End: ' + end)
    var paginatedProducts = products.slice(start, end)
    res.render('products/index',{
        products: paginatedProducts,
        indexCount: indexCount,
        currentIndex: currentIndex
    })
}