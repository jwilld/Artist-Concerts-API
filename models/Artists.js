const mongoose = require('../db/connection')

const Artist = new mongoose.Schema({
    name: String
})


module.exports = mongoose.model('Artist',Artist)