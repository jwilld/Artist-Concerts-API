const express = require('express')
const router = express.Router()

const Genre = require('../models/Genre')

router.get('/genres',(req,res) => {
    Genre.find({}).then(genres => res.json(genres))
})
router.post('/genres', (req,res) => {
    Genre.create(req.body).then(genre => res.json(genre))
})
module.exports = router