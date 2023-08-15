const mongoose = require('mongoose')
const db = require("../models")
const { v4: uuidv4 } = require('uuid');
const { createVideoUrl, createThumbnailVideo } = require('../utils/video');

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

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
    },
    {
        "uuid": uuidv4(),
        "id_youtube": "gyuP5cWyCUc",
        "video_youtube": createVideoUrl("gyuP5cWyCUc"),
        "thumbnail_youtube": createThumbnailVideo("gyuP5cWyCUc")
    }
]

const productData = [
    {
        "uuid": uuidv4(),
        "video_id": videoData[0].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Sapu",
        "price": "5000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[0].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Katana",
        "price": "6000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[0].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "apple",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[0].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "pisang",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[0].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Kursi",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[1].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Sapu",
        "price": "5000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[1].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Katana",
        "price": "6000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[1].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "apple",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[1].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "pisang",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[1].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Kursi",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[2].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Sapu",
        "price": "5000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[2].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Katana",
        "price": "6000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[2].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "apple",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[2].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "pisang",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[2].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Kursi",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[3].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Sapu",
        "price": "5000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[3].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Katana",
        "price": "6000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[3].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "apple",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[3].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "pisang",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[3].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Kursi",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[4].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Sapu",
        "price": "5000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[4].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Katana",
        "price": "6000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[4].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "apple",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[4].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "pisang",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[4].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Kursi",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[5].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Sapu",
        "price": "5000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[5].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Katana",
        "price": "6000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[5].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "apple",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[5].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "pisang",
        "price": "7000"
    },
    {
        "uuid": uuidv4(),
        "video_id": videoData[5].uuid,
        "product_url": "https://tokopedia.link/1ZUJYBPoeCb",
        "title": "Kursi",
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
//         db.mongoose.connect(db.url, mongooseConfig)
//     .then(() => console.log("Database Connected"))
//     .catch((err) => {
//         console.log(err.message)
//         process.exit()
// })
        await db.mongoose.connect(db.url, mongooseConfig)
        await db.video.deleteMany({}); // memnghapus record video
        await db.product.deleteMany({}); // memnghapus record product
        await db.comment.deleteMany({});

        await db.video.insertMany(videoData);
        await db.product.insertMany(productData);
        await db.comment.insertMany(commentData);

        await mongoose.connection.close()
    } catch (error) {
        console.log(error);
        process.exit();
    }
}
module.exports = seedDB