const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    slug: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String
        }
    ],
    isPublished: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })


module.exports = mongoose.model("Blog", blogSchema)