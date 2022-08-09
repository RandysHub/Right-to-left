const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: false }
})

const Manga = mongoose.model('Manga', mangaSchema)

module.exports = Manga