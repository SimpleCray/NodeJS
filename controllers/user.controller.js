const db = require('../db')
const shortid = require('shortid')

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
    req.body.id = shortid.generate()
    var errors = []
    if(!req.body.email) errors.push('Please enter email !')
    if(!req.body.password) errors.push('Please enter password !')
    if(!req.body.phone) errors.push('Please enter phone !')
    if (errors.length){
        res.render("users/create",{
           errors: errors,
           values: req.body
        })
        return;
    }
    db.get('users').push(req.body).write()
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