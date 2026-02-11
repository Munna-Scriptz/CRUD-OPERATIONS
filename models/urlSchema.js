const mongoose = require("mongoose")

const urlSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
    },
    clicks: [
        {
            totalClicks: {
                type: Number,
                default: 0
            },
            clickTime: {
                type: Date,
                default: new Date()
            }
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model("url", urlSchema)