const mongoose = require('../db/connection')

const Hits = new mongoose.Schema({
    title: String,
    full_title:String,
    primary_artist:{
        name: String
    }
})


module.exports = mongoose.model('Hits',Hits)