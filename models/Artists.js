const mongoose = require('../connection')

const Artist = new mongoose.Schema({
    name: String
})


module.exports = mongoose.model('Artist',Artist)