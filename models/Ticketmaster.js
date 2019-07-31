const mongoose = require('mongoose')

const Artist = new mongoose.Schema({
    attractions:[
        {
            name: String
        }
    ]
})


module.exports = mongoose.model('Artist',Artist)