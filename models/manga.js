const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: false },
    genre: { type: String, required: false },
    synopsis: { type: String, required: false },
    stock: { type: Number, default: 10, required: false },
    price: { type: String, default: '$9.99', required: true },
    volume: { type: Number, default: 1, required: true }
})

const Manga = mongoose.model('Manga', mangaSchema)

module.exports = Manga