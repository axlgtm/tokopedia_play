module.exports = app => {
    const video = require("../controllers/video.controller")
    const comment = require("../controllers/comment.controller")
    const product = require("../controllers/product.controller")
    const router = require("express").Router();

    router.get("/", video.findAll);
    router.get("/:id", video.show);
    router.post("/", video.create);
    router.put("/:id", video.update);
    router.delete("/:id", video.delete);

    router.get("/:id/comments", comment.find)

    router.get("/:id/product", product.find)

    app.use("/video", router)
}