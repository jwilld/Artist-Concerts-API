const mongoose = require('mongoose')

const Artist = new mongoose.Schema({
    attractions:[
        {
            name: String
        }
    ]
})