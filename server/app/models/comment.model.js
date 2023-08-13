module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            uuid: String,
            username: String,
            comment: String,
            video_id: String
        }, {
            timestamps: true
        }
    );

    return mongoose.model("comment", schema)
}