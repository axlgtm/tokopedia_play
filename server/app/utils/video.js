function createVideoUrl (id_youtube) {
    return `https://www.youtube.com/watch?v=${id_youtube}`
}
function createThumbnailVideo (id_youtube) {
    return `https://img.youtube.com/vi/${id_youtube}/sddefault.jpg`
}

module.exports = {createVideoUrl, createThumbnailVideo}