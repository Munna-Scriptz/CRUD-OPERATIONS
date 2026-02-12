const express = require("express")
const router = express.Router()
const multer  = require('multer')
const upload = multer()
const { create } = require("../controller/blogController")



router.post("/create", upload.single('blogImg'), create)


module.exports = router