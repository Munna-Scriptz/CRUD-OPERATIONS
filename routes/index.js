const express = require("express")
const router = express.Router()
const notes = require("./note")


router.use("/note", notes)


// ============== Not found 
router.use((req, res)=>{ res.send("404 not found")})

module.exports = router