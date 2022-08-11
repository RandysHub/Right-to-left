const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: false },
    genre: { type: String, required: false },
    synopsis: { type: String, required: false },
    stock: { type: Number, default: 10, required: false }
})

const Manga = mongoose.model('Manga', mangaSchema)

module.exports = Manga