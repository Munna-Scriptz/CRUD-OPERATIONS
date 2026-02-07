const express = require("express")
const router = express.Router()
const { createNotes, updateNotes, deletNotes } = require("../controllers/noteController")

router.post("/create", createNotes)
router.post("/update/:noteId", updateNotes)
router.post("/delete/:noteId", deletNotes)

module.exports = router