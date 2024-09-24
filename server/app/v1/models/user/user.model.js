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
        unique:true
    },
    isAdmin:{
        type:Boolean,
        default:false
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