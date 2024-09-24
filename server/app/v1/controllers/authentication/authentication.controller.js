const { statusCode, successMessage, errorMessage } = require("../../constants/constant.js")
const { sendResponse } = require("../../utils/sendResponse.utils.js")
const service = require('../../services/authentication/authntication.service.js')
const { generateToken } = require('../../utils/password.utils.js')
const { validPassword } = require('../../utils/password.utils')
const User = require('../../models/user/user.model')

//signup
exports.signUp = async (req, res) => {
    try {
        const details = req.body
        const createdUser = await service.signUp(details)
        if (createdUser.isAlreadyExist) {
            return sendResponse(res, statusCode.BAD_REQUEST, false, `User With This Email Already Exists`)
        }
        return sendResponse(res, statusCode.CREATED, true, successMessage.SIGNUP, createdUser.result)
    } catch (error) {
        console.log(error)
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, errorMessage.INTERNAL_SERVER_ERROR)
    }
}

//login
exports.logIn = async (req, res) => {
    try {
        const details = req.body
        const user = await User.findOne({ email: details.email })
        if (!user) {
            return sendResponse(res, statusCode.NOT_FOUND, false, `User With Given Email ${errorMessage.NOT_FOUND}`)

        }
        const validatedUser = validPassword(details.password, user.password, user.salt)
        const token = await generateToken(user)
        return validatedUser ? sendResponse(res, statusCode.OK, true, successMessage.LOGIN, token) : sendResponse(res, statusCode.OK, false, errorMessage.WRONG_PASSWORD)

    } catch (error) {
        console.log(error)
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, errorMessage.INTERNAL_SERVER_ERROR)
    }
}


//forget-password
exports.forget = async (req, res) => {
    try {

        const email = req.body.email
        console.log(email)
        const success = await service.forget(email)
        console.log(success)
        if (success.status) {
            return sendResponse(res, statusCode.OK, true, successMessage.EMAIL_SENT)
        }
        if (!success.status && !success.isExistUser) {
            return sendResponse(res, statusCode.NOT_FOUND, false, `User With Given Email ${errorMessage.NOT_FOUND}`)

        }
        return sendResponse(res, statusCode.BAD_REQUEST, false, errorMessage.BAD_REQUEST)


    } catch (error) {
        console.log(error)
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, errorMessage.INTERNAL_SERVER_ERROR)
    }
}


//reset

exports.reset = async (req, res) => {
    try {

        const id = req.params.id
        const password = req.body.password
        const updatedUser = await service.reset(id, password)
        if(updatedUser){
            return sendResponse(res,statusCode.OK,true,successMessage.UPDATED,updatedUser)
        }
        return sendResponse(res,statusCode.BAD_REQUEST,false,errorMessage.BAD_REQUEST)
    } catch (error) {
        console.log(error)
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, errorMessage.INTERNAL_SERVER_ERROR)
    }
}