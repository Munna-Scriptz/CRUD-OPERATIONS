require("dotenv").config()
const express = require("express")
const router = require("./routes")
const dbConfig = require("./dbConfig")
const app = express()
app.use(express.json())
app.use(router)
dbConfig()


app.listen(8000, ()=>{
    console.log("Server is running")
})