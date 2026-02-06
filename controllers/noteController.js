const noteSchema = require("../models/noteSchema")

const createNotes = (req, res) => {
    try {
        const { title, content } = req.body
        if (!title) return res.status(400).send("Note title is required")

        // ------------ Set to DB
        const note = noteSchema({
            title,
            content
        })
        
        note.save()
        
        // ------------- Success 
        res.status(201).send("Note created successfully")
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createNotes }