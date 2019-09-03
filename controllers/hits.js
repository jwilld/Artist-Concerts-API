const express = require('express')
const router = express.Router()

const Hits = require('../models/Hits')

router.get('/hits',(req,res) => {
    Hits.find({}).then(hits => res.json(hits))
})
router.post('/hits', (req,res) => {
    Hits.create(req.body).then(hits => res.json(hits))
})
module.exports = router