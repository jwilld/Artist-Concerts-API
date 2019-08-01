const express = require('express')
const router = express.Router()

const Artist = require('../models/Artists')

router.get('/artists',(req,res) => {
    Artist.find({}).then(artists => res.json(artists))
})

router.get('/',(req,res) => {
    res.redirect('/artists')
})

router.post('/new', (req,res) => {
    Artist.create(req.body).then(arsits => res.json(artist))
})
module.exports = router