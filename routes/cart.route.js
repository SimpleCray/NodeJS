const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart.controller')

router.get('/addToCart/:productId', cartController.addToCart)
module.exports = router;