const urlRegex = /https?\:\/\/\w+((\:\d+)?\/\S*)?/
const urlSchema = require("../models/urlSchema")
const { generateRandomStrings } = require("../utils/services")

// ====================== Create 
const create = (req, res) => {
    try {
        const { originalUrl } = req.body

        // ------- Validation 
        if (!originalUrl) return res.status(400).send("Original url is required")
        if (!urlRegex.test(originalUrl)) res.status(400).send("Please enter a valid url")

        const urlString = generateRandomStrings()

        const newUrl = urlSchema({
            originalUrl,
            shortUrl: urlString
        })

        newUrl.save()

        // ------- Success 
        res.status(201).send("Url shortened successfully")
    } catch (error) {
        console.log(error)
    }
}

// ====================== Create 
const redirect = async (req, res) => {
    try {
        const { urlId } = req.params

        if (!urlId) return res.status(400).send("Invalid request")
        const existingUrl = await urlSchema.findOne({
            shortUrl: urlId
        })
        if (!existingUrl) return res.status(400).send("Url doesnt exist")

        // --------- Redirect 
        res.redirect(existingUrl.originalUrl)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { create, redirect }