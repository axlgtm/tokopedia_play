// import express from 'express';
// import cors from "cors";
const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const seedDB = require("./app/config/seed")

const app = express()

const corsOptions = {
    origin: ["https://tokopedia-play.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json());

//seedDB() // isi db

// Konek ke db
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

// memanggil routes
require("./app/routes/video.routes")(app)
require("./app/routes/product.routes")(app)
require("./app/routes/comment.routes")(app)

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})
