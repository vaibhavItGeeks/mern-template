const express = require('express')
const router = express.Router()
const authenticationRoutes = require('./authentication/authentication.router.js')
const userRoutes = require('./userRoutes/user.router.js')

router.use('/auth',authenticationRoutes)
router.post('/user',userRoutes)


module.exports = router