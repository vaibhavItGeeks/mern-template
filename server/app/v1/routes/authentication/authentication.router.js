const express = require('express')
const router = express.Router()
const authenticationController = require('../../controllers/authentication/authentication.controller')

// const 

router.post('/signup',authenticationController.signUp)
router.post('/login',authenticationController.logIn)


module.exports = router