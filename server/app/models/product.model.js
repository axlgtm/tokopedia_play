module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            uuid: String,
            video_id: String,
            product_url: String,
            title: String,
            price: Number
        }, {
            timestamps: true
        }
    )

    return mongoose.model("products", schema)
}