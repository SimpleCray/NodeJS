const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const userValidate = require('../validate/userValidate')
//Authentication check
const userAuth = require('../authentication/user.auth')

router.get('/',  userAuth.loginAuth, userController.index)

router.get('/profile/:id', userAuth.loginAuth, userController.profile)

router.get('/create', userAuth.loginAuth, userController.create)

router.post('/create', userValidate.postCreate, userController.postCreate)

router.get('/login', userController.login)

router.post('/login', userController.postLogin)

router.get('/search', userAuth.loginAuth, userController.search)


module.exports = router;