
module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            uuid: String,
            id_youtube: String,
            video_youtube: String,
            thumbnail_youtube: String
        }, {
            timestamps: true
        }
    );

    return mongoose.model("videos", schema)
}