const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
    },
    isPinned: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("notes", noteSchema)