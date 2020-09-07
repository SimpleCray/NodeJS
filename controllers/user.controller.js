const db = require('../db')
//Auto generate ID
const shortid = require('shortid')
//MD5
const md5 = require('md5')

// User index
module.exports.index = (req, res) => {
    res.render('users/index',{
        users: db.get('users').value()
    })
}
// User Profile
module.exports.profile = (req, res) => {
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value();
    res.render('users/view',{
      user: user
    })
}
// Create new User
module.exports.create = (req, res) => {
    res.render('users/create')
}
// PostCreate new User
module.exports.postCreate = (req, res) => {
    var id = shortid.generate()
    data = {
        id: id,
        email: req.body.email,
        password: md5(req.body.password),
        phone: req.body.phone
    }
    db.get('users').push(data).write()
    res.redirect("/users")
}
// User login
module.exports.login = (req, res) => {
    res.render('users/login')
}
// PostLogin User
module.exports.postLogin = (req, res) => {
    data = {
        email: req.body.email,
        password: md5(req.body.password)
    }
        req.body
    var errors = []
    var user = db.get('users').find(data).value()
    console.log(user)
    if (!user){
        errors.push('In correct username or password !')
        res.render('users/login',{
            errors: errors,
            values: req.body
        })
        return;
    }
    res.cookie('user', user.id, {signed: true})
    res.redirect("/users")
}
// Search User
module.exports.search = (req, res) => {
    var q = req.query.q;
    var matchedUsers = db.get('users').filter(function(user){
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/users',{
      users: matchedUsers.value()
    })
}