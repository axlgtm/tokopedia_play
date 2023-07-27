module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            username: String,
            comment: String,
            video_id: String
        }, {
            timestamps: true
        }
    );

    return mongoose.model("comment", schema)
}