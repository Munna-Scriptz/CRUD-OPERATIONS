require("dotenv").config()
const express = require("express")
const router = require("./routes")
const dbConfig = require("./dbConfig")
const cloudConfig = require("./cloudinary/cloudConfig")
const app = express()
app.use(express.json())
app.use(router)

dbConfig()
cloudConfig()

app.listen(8000, () => {
    console.log("Server is running")
})