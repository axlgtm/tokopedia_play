module.exports = app => {
    const video = require("../controllers/video.controller")
    const router = require("express").Router();

    router.get("/", video.findAll);
    router.get("/:id", video.show);
    router.post("/", video.create);
    router.put("/:id", video.update);
    router.delete("/:id", video.delete);

    app.use("/video", router)
}