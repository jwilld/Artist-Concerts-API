const mongoose = require('../db/connection')

const Youtube = new mongoose.Schema({
    name: String,
    link: String
})


module.exports = mongoose.model('Youtube',Youtube)