module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
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