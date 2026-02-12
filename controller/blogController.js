const cloudinary = require('cloudinary').v2

const create = async (req, res) => {
    try {
        const { slug, title, content, tags, isPublished } = req.body

        // --------------------- Upload to cloudinary 
        
        // --------------------- Upload to cloudinary 
        const blogImg = req.file
        const base64String = blogImg.buffer.toString("base64")
        const dataUrl = `data:${blogImg.mimetype};base64,${base64String}`
        const cloudRes = await cloudinary.uploader.upload(dataUrl, { asset_folder: "CRUD_PROJECTS/Blog-API" })
        console.log(cloudRes.secure_url)

    } catch (error) {
        console.log(error)
    }
}

module.exports = { create }