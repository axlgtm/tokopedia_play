module.exports = app => {
    const comment = require("../controllers/comment.controller")
    const router = require("express").Router()

    router.post("/", comment.create);
    router.get("/:id", comment.find)

    app.use("/comment", router)
}