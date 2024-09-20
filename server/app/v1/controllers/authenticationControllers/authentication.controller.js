const { statusCode, successMessage, errorMessage } = require("../../constants/constant.js")
const { sendResponse } = require("../../utils/sendResponse.utils.js")







exports.signUp = async (req, res) => {
    try {
        const details = req.body
        const createdUser = await 
    } catch (error) {
        console.log(error)
        return sendResponse(res,statusCode.INTERNAL_SERVER_ERROR,errorMessage.INTERNAL_SERVER_ERROR)
    }
}