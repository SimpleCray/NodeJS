const express = require('express')
const router = express.Router()
const shortid = require('shortid')

const db = require('../db')

router.get('/', (req, res) => {
    res.render('users/users',{
        users: db.get('users').value()
    })
})

router.get('/profile/:id', (req, res) => {
  var id = req.params.id;
  var user = db.get('users').find({id: id}).value();
  res.render('users/view',{
    user: user
  })
})

router.get('/create', (req, res) => {
  res.render('users/create')
})

router.post('/create', (req, res) => {
  req.body.id = shortid.generate()
  db.get('users').push(req.body).write()
  res.redirect("/users")
})

router.get('/search', (req,res) => {
  var q = req.query.q;
  var matchedUsers = db.get('users').filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  })
  res.render('users/users',{
    users: matchedUsers.value()
  })
})

module.exports = router;