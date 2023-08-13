const dbConfig = require('../config/database')
const mongoose = require("mongoose")

module.exports = {
    mongoose,
    url: dbConfig.url,
    video: require("./video.model.js")(mongoose), 
    product: require("./product.model.js")(mongoose),
    comment: require("./comment.model.js")(mongoose)
}