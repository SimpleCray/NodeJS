const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/user.route')
const app = express()
const port = 4000
app.set('view engine', 'pug')
app.set('views', './views')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static('public'))
//Route for user
app.use('/users', userRoute)

app.get('/', (req, res) => {
  res.render('index',{
      name: 'Hai Duong'
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})