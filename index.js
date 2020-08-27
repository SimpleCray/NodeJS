const express = require('express')
const app = express()
const port = 4000
var users = [
  {id:1, name: 'Phong'},
  {id:2, name: 'Hai'},
  {id:3, name: 'Hoang'}
];
app.set('view engine', 'pug')
app.set('views', './views')

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
  res.render('index',{
      name: 'Hai Duong'
  })
})

app.get('/users', (req, res) => {
    res.render('users/users',{
        users: users
    })
})

app.get('/users/create', (req, res) => {
  res.render('users/create')
})

app.post('/users/create', (req, res) => {
  users.push(req.body)
  res.redirect("/users")
})

app.get('/users/search', (req,res) => {
  var q = req.query.q;
  var matchedUsers = users.filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  })
  res.render('users/users',{
    users: matchedUsers
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})