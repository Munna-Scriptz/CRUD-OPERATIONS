const express = require("express")
const router = express.Router()
const { createNotes, updateNotes, deletNotes, getAllNotes } = require("../controllers/noteController")

router.post("/create", createNotes)
router.post("/update/:noteId", updateNotes)
router.post("/delete/:noteId", deletNotes)
router.get("/all", getAllNotes)

module.exports = router