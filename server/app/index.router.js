const express = require('express')
const routes_v1 = require('./v1/routes/index.router')

const router = express.Router()



router.use('/api/v1',routes_v1)

module.exports = router