const mongoose = require('../db/connection')

const Youtube = new mongoose.Schema({
    link:{
        type: String
    },
    name:{
        type: String
    }

})


module.exports = mongoose.model('Youtube',Youtube)