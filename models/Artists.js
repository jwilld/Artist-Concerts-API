const mongoose = require('../db/connection')

const Artist = new mongoose.Schema({
    name: String,
    alternate_names:[{
        type: String
    }
    ],
    twitter_name:String,
    hits:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Hits'
        }
    ]
    
})


module.exports = mongoose.model('Artist',Artist)