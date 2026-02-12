const express = require("express")
const router = express.Router()
const blog = require("./blog")

router.use("/blog", blog)



module.exports = router