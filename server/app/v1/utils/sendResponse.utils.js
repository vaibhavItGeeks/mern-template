exports.sendResponse = function (res, code, status, message, result) {
    return res.status(code).json({ status: status, message: message, result: result })
}