const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.index)

router.get('/profile/:id', userController.profile)

router.get('/create', userController.create)

router.post('/create', userController.postCreate)

router.get('/search', userController.search)

module.exports = router;