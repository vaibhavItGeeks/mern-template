const express = require('express')
var cookieParser = require('cookie-parser')
require('dotenv').config()
const { connectDb } = require('./server/app/v1.0/config/db.config')
const Routes = require('./server/app/index.router')
const app = express()

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/', Routes)



//db connection and server running 
connectDb().then(() => {
    console.log(`Server Running On Port ${process.env.PORT}`)
    app.listen(process.env.PORT)
}).catch((error) => {
    console.log(error)
})
