const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const userValidate = require('../validate/userValidate')

router.get('/', userController.index)

router.get('/profile/:id', userController.profile)

router.get('/create', userController.create)

router.post('/create', userValidate.postCreate, userController.postCreate)

router.get('/search', userController.search)


module.exports = router;