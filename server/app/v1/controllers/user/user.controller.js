const { statusCode, successMessage, errorMessage } = require("../../constants/constant.js")
const { sendResponse } = require("../../utils/sendResponse.utils.js")
const service = require('../../services/authentication/authntication.service.js')
const { generateToken } = require('../../utils/password.utils.js')
const { validPassword } = require('../../utils/password.utils')
const { jwtDecode } = require('jwt-decode');
const User = require('../../models/user/user.model')

//user details
exports.userDetails = async (req, res) => {
    try {
        const token = req.headers['authorization'];
        const decoded = jwtDecode(token)
        const userDetail = await User.findOne({ _id: decoded.id })
        return sendResponse(res, statusCode.OK, true, `User Details ${successMessage.FETCH}`, userDetail)

    } catch (error) {
        console.log(error)
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, errorMessage.INTERNAL_SERVER_ERROR)

    }
}