module.exports = app => {
    const product = require("../controllers/product.controller")
    const router = require("express").Router()

    router.post("/", product.create)
    router.get("/:id", product.find)

    app.use("/product", router)
}