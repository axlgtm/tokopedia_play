
module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            thumbnail_url: String
        }, {
            timestamps: true
        }
    );

    return mongoose.model("videos", schema)
}