const crypto = require("crypto")
const jwt = require('jsonwebtoken')

exports.generatePassword = async(password) => {
    const salt = crypto.randomBytes(32).toString('hex')
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return {
        salt: salt,
        hash: genHash
    }
}
exports.validPassword = (password, hash, salt) => {
    const checkHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return hash === checkHash
}

exports.generateToken = (details) => {
    const secretKey = process.env.SECRET_KEY
    const payload = {
        id:details.id,
        data:new Date()
    }
    const options = {
      expiresIn: '1h', 
    };
  
    const token = jwt.sign(payload, secretKey, options);
    return token;
  };
  
