const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user/user.controller')
const passport = require('passport')


router.get('/user', passport.authenticate('jwt', { session: false }),userController.userDetails)


module.exports = router