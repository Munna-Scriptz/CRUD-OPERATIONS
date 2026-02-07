const express = require("express")
const router = express.Router()
const { createNotes, updateNotes } = require("../controllers/noteController")

router.post("/create", createNotes)
router.post("/update/:noteId", updateNotes)

module.exports = router