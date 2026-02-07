const noteSchema = require("../models/noteSchema")

// ======================= Create notes 
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

// ======================= Update notes 
const updateNotes = async (req, res) => {
    try {
        const { noteId } = req.params
        const { title, content, isPinned } = req.body

        // ------------ Find and update 
        const note = await noteSchema.findOneAndUpdate({ _id: noteId }, { title, content, isPinned }, { new: true })
        if (!note) return res.status(404).send("Note couldn't found")

        // ------------- Success 
        res.status(200).send("Note updated successfully", note)
    } catch (error) {
        console.log(error)
    }
}

// ======================= Delete notes 
const deletNotes = async (req, res) => {
    try {
        const { noteId } = req.params

        const note = await noteSchema.findOneAndDelete({ _id: noteId })
        if (!note) return res.status(400).send("Note couldn't Found")

        // ------------- Success 
        res.status(201).send("Note Deleted successfully")
    } catch (error) {
        console.log(error)
    }
}


// ======================= Get All notes 
const getAllNotes = async (req, res) => {
    try {
        const note = await noteSchema.find({})
        if (!note) return res.status(400).send("Note couldn't Found")

        // ------------- Success 
        res.status(200).send(note)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createNotes, updateNotes, deletNotes, getAllNotes }