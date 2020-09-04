const db = require('../db')
//Auto generate ID
const shortid = require('shortid')
// User index
module.exports.index = (req, res) => {
    console.log(req.cookies.user)
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
        password: req.body.password,
        phone: req.body.phone
    }
    res.cookie('user', data)
    db.get('users').push(data).write()
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