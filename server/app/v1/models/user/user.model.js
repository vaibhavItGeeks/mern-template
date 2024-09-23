const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
    },
    salt:{
        type:String,
    },
    password: {
        type: String,
    },

})

const User = mongoose.model('User', userSchema)
module.exports = User