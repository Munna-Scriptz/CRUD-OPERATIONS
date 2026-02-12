const express = require("express")
const router = express.Router()
const url = require("./url")
const { redirect } = require("../controllers/urlController")

router.use("/url", url)
router.get("/:urlId", redirect) 

module.exports = router