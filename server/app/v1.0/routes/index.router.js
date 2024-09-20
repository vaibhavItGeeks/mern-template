const express = require('express')
const router = express.Router()
const authenticationRoutes = require('./authenticationRoutes/authentication.router.js')
const userRoutes = require('./userRoutes/user.router.js')

router.post('/auth',authenticationRoutes)
router.post('/user',userRoutes)


module.exports = router