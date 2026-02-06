const express = require("express")
const router = express.Router()

router.get("/home", (req, res)=>{
    res.send({
        msg: "Hello world"
    })
})


// ============== Not found 
router.use((req, res)=>{ res.send("404 not found")})

module.exports = router