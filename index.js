const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const { connectDb } = require('./server/app/v1/config/db.config')
const routes = require('./server/app/index.router')
const passport = require('passport')
const { initializePassport } = require('./server/app/v1/config/passport.config')
const app = express()



initializePassport(passport)
//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/', routes)


//db connection and server running 
connectDb().then(() => {
    console.log(`Server Running On Port ${process.env.PORT}`)
    app.listen(process.env.PORT)
}).catch((error) => {
    console.log(error)
})
