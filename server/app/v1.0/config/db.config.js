const mongoose = require('mongoose')

exports.connectDb = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log(`MongoDb Connected Successfully`)
        }).catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log(error)
    }
}

