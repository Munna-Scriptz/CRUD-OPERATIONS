const express = require("express")
const router = express.Router()
const multer  = require('multer')
const upload = multer()
const { create, update, deleteBlog } = require("../controller/blogController")



router.post("/create", upload.single('blogImg'), create)
router.put("/update/:id", update)
router.delete("/delete/:id", deleteBlog)
router.get("/single/:slug", deleteBlog)


module.exports = router