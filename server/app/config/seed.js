const mongoose = require('mongoose')
const db = require("../models")
const { v4: uuidv4 } = require('uuid');
const { createVideoUrl, createThumbnailVideo } = require('../utils/video');

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("Database Connected"))
    .catch((err) => {
        console.log(err.message)
        process.exit()
})

const videoData = [
    {
        "uuid": uuidv4(),
        "id_youtube": "Wbn_rwhcWc8",
        "video_youtube": createVideoUrl("Wbn_rwhcWc8"),
        "thumbnail_youtube": createThumbnailVideo("Wbn_rwhcWc8")
    },
    {
        "uuid": uuidv4(),
        "id_youtube": "gyuP5cWyCUc",
        "video_youtube": createVideoUrl("gyuP5cWyCUc"),
        "thumbnail_youtube": createThumbnailVideo("gyuP5cWyCUc")
    },
    {
        "uuid": uuidv4(),
        "id_youtube": "Wbn_rwhcWc8",
        "video_youtube": createVideoUrl("Wbn_rwhcWc8"),
        "thumbnail_youtube": createThumbnailVideo("Wbn_rwhcWc8")
    },
    {
        "uuid": uuidv4(),
        "id_youtube": "gyuP5cWyCUc",
        "video_youtube": createVideoUrl("gyuP5cWyCUc"),
        "thumbnail_youtube": createThumbnailVideo("gyuP5cWyCUc")
    },
    {
        "uuid": uuidv4(),
        "id_youtube": "Wbn_rwhcWc8",
        "video_youtube": createVideoUrl("Wbn_rwhcWc8"),
        "thumbnail_youtube": createThumbnailVideo("Wbn_rwhcWc8")
    }
]

const productData = [
    {
        "uuid": uuidv4(),
        "video_id": videoData[0].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "product 1",
        "price": "5000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[0].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "product 2",
        "price": "6000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[0].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "product 3",
        "price": "7000"
    }
]

const commentData = [
    {
        "uuid": uuidv4(),
        "username": "user1",
        "comment": "comment1",
        "video_id": videoData[0].uuid
    },
    {
        "uuid": uuidv4(),
        "username": "user2",
        "comment": "comment2",
        "video_id": videoData[0].uuid
    }
]

const seedDB = async () => {
    try {
        const deleteRecordVideo = await db.video.deleteMany({}); // memnghapus record video
        const deleteRecordProduct = await db.product.deleteMany({}); // memnghapus record product
        const deleteRecordComment = await db.comment.deleteMany({});

        const seedVideo = await db.video.insertMany(videoData);
        const seedProduct = await db.product.insertMany(productData);
        const seedComment = await db.comment.insertMany(commentData);

        await mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}
module.exports = seedDB