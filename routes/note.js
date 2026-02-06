const express = require("express")
const router = express.Router()
const { createNotes } = require("../controllers/noteController")

router.post("/create", createNotes)

module.exports = router