const express = require('express')
const router = express.Router()

const Genre = require('../models/Genre')

router.get('/genres',(req,res) => {
    Genre.find({}).then(genres => res.json(genres))
})

module.exports = router