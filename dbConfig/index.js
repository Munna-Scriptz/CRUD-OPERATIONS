const mongoose = require("mongoose")

module.exports = dbConfig = () => {
    return (
        mongoose.connect(process.env.DB_STRING)
            .then(() => console.log('DB Connected!'))
    )
}