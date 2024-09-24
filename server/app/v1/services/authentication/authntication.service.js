const User = require('../../models/user/user.model')
const { generatePassword } = require('../../utils/password.utils')
const { emailConfig } = require('../../config/email.config')
const { forget } = require('../../utils/emailTemplate')
const nodemailer = require('nodemailer');


//signup
exports.signUp = async (details) => {
  const isAlreadyExist = await User.findOne({ email: details.email })
  if (isAlreadyExist) {
    return {
      status: false,
      isAlreadyExist: true
    }
  }

  const bodyPassword = details.password
  const { salt, hash } = await generatePassword(bodyPassword)
  const { password, ...bodyDetails } = details
  const userDetails = { ...bodyDetails, password: hash, salt: salt }
  const user = await User.create(userDetails)

  return {
    status: true,
    result: user
  }
}


//forget-password
exports.forget = async (email) => {
  const isExistUser = await User.findOne({ email: email })
  if (!isExistUser) {
    return {
      status: false,
      isExistUser: false
    }
  }
  const transporter = nodemailer.createTransport(emailConfig);
  const link = `${process.env.FORGET_LINK}/${isExistUser.id}`
  // const link = `${process.env.FORGET_LINK}/1`
  const info = await transporter.sendMail(forget(email, link));

  if (info.messageId) {
    return {
      status: true
    }
  }

}


exports.reset = async(email,password)=>{
 const { salt, hash } = await generatePassword(password)
 const updatedUser = await User.findOneAndUpdate({email:email},{salt:salt,password:hash})
 if(updatedPassword){
  return{
    status:true,
    result:updatedUser
  }
 }
}