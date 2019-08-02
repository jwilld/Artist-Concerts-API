const mongoose = require('../db/connection')

const Genre = new mongoose.Schema({
    name: String,
    genre: String
})

module.exports = mongoose.model('Genre',Genre)