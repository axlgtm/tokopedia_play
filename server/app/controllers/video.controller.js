const db = require("../models")
const video = db.video

exports.create = (req, res) => {
    video.create(req.body)
        .then(() => res.send({message: "Data Berhasil dibuat"}))
        .catch(err => res.status(500).send({message: err.message}))
}
exports.findAll = (req, res) => {
    video.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}
exports.show = (req, res) => {
    const id = req.params.id;

    video.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}
exports.update = (req, res) => {
    const id = req.params.id

    video.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Data tidak ditemukan"})
            }
            res.send({message: "data berhasil diupdate"})
        })
        .catch(err => res.status(500).send({message: err.message}))
}
exports.delete = (req, res) => {
    const id = req.params.id
    video.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Tidak dapat menghapus data"})
            }
            res.send({message: "data berhasil dihapus"})
        })
        .catch(err => res.status(500).send({message: err.message}))
}