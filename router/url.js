const express = require("express")
const { create, allUrl, deleteUrl, } = require("../controllers/urlController")
const router = express.Router()

router.post("/create", create)
router.post("/delete/:id", deleteUrl)

router.get("/allUrls", allUrl)

module.exports = router