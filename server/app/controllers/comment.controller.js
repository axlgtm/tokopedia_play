const db = require("../models")
const comment = db.comment

exports.create = (req, res) => {
    comment.create(req.body)
        .then(() => res.send({message: "Data Berhasil dibuat"}))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.find = (req, res) => {
    const id = req.params.id
    
    comment.find({"video_id": `${id}`})
        .then(data => {
            if (!data) {
                res.send({data: []})
            }
            res.send({
                data: data
            })
        })
        .catch(err => res.status(500).send({message: err.message}))
}