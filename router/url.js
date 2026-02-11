const express = require("express")
const { create, allUrl } = require("../controllers/urlController")
const router = express.Router()

router.post("/create", create)
router.get("/allUrls", allUrl)

module.exports = router