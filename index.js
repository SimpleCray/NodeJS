//Config .env
require ('dotenv').config()
console.log(process.env.SESSION_SECRET)
const express = require('express')
//Require body-parser for send form data as request body
const bodyParser = require('body-parser')
//Read cookies data
const cookieParser = require('cookie-parser')
//Require route for user
const userRoute = require('./routes/user.route')

const app = express()
const port = 4000
app.set('view engine', 'pug')
//Set views container folder
app.set('views', './views')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
//Use cookieParser with secret signed code
app.use(cookieParser(process.env.SESSION_SECRET))
//include static folder public
app.use(express.static('public'))
//Route for user
app.use('/users', userRoute)

//Homepage
app.get('/', (req, res) => {
  res.render('index',{
      name: 'Hai Duong'
  })
})
app.listen(port, () => {
  console.log(`Example app is running at http://localhost:${port}`)
})