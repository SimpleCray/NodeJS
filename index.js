const express = require('express')
const app = express()
const port = 4000
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
// Set some defaults
db.defaults({ users: [] })
  .write()


// var users = [
//   {id:1, name: 'Phong'},
//   {id:2, name: 'Hai'},
//   {id:3, name: 'Hoang'},
//   {id:4, name: 'Heng'},
// ];
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
        users: db.get('users').value()
    })
})

app.get('/users/create', (req, res) => {
  res.render('users/create')
})

app.post('/users/create', (req, res) => {
  db.get('users').push(req.body).write()
  res.redirect("/users")
})

app.get('/users/search', (req,res) => {
  var q = req.query.q;
  var matchedUsers = db.get('users').filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  })
  res.render('users/users',{
    users: matchedUsers.value()
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})