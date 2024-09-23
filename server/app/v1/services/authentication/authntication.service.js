const User = require('../../models/user/user.model')
const { generatePassword } = require('../../utils/password.utils')

exports.signUp = async (details) => {
    const isAlreadyExist = await User.findOne({email:details.email})
    if(isAlreadyExist){
     return {
        status:false,
        isAlreadyExist:true
     }   
    }

    const bodyPassword = details.password
    const { salt, hash } = generatePassword(bodyPassword)

    const { password, ...bodyDetails } = details
    const userDetails = { ...bodyDetails, password: hash, salt: salt }

    const user = await User.create(userDetails)

    return {
        status:true,
        result:user
    }
    

}