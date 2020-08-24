const express = require('express')
const app = express()
const port = 4000

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index',{
      name: 'Hai Duong'
  })
})

app.get('/users', (req, res) => {
    res.render('users/users',{
        users: [
            {id:1, name: 'Phong'},
            {id:2, name: 'Hai'},
            {id:3, name: 'Hoang'}
        ]
    })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})