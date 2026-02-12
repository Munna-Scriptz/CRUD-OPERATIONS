const express = require("express")
const router = express.Router()
const { create } = require("../controller/blogController")

router.post("/create", create)


module.exports = router