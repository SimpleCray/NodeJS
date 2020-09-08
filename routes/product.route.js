const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')
//Session check
const sessionMiddleware = require('../middlewares/session.middleware')

router.get('/:index', sessionMiddleware.session,  productController.index)
module.exports = router;