const blogSchema = require('../models/blogSchema')
const cloudinary = require('cloudinary').v2

// ============= Create 
const create = async (req, res) => {
    try {
        const { slug, title, content, tags, isPublished } = req.body
        const blogImg = req.file

        // --------------------- validation
        if (!blogImg) return res.status(400).send("Blog image is required")
        if (!slug) return res.status(400).send("Blog slug is required")
        if (!title) return res.status(400).send("Blog title is required")
        if (!content) return res.status(400).send("Blog content is required")

        // --------------------- Upload to cloudinary 
        const base64String = blogImg.buffer.toString("base64")
        const dataUrl = `data:${blogImg.mimetype};base64,${base64String}`
        const cloudRes = await cloudinary.uploader.upload(dataUrl, { asset_folder: "CRUD_PROJECTS/Blog-API" })

        // --------------------- Save to DB 
        const newBlog = await blogSchema({
            slug: slug.toLowerCase(),
            title,
            content,
            image: cloudRes.secure_url,
            tags,
            isPublished
        })

        newBlog.save()

        // --------------------- Success
        res.status(201).send("New blog post published")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

// ============= Update
const update = async (req, res) => {
    try {
        const { id } = req.params
        const { slug, title, content, tags, isPublished } = req.body

        // --------------------- validation
        if (!slug) return res.status(400).send("Blog slug is required")
        if (!title) return res.status(400).send("Blog title is required")
        if (!content) return res.status(400).send("Blog content is required")


        const existingBlog = await blogSchema.findByIdAndUpdate(id, {
            slug: slug.toLowerCase(),
            title,
            content,
            tags,
            isPublished
        })
        if (!existingBlog) return res.status(400).send("Blog post doesn't exist")


        // --------------------- Success
        res.status(201).send("blog post updated")
    } catch (error) {
        console.log(error);
    }
}


module.exports = { create, update }