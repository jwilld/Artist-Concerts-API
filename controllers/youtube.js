const express = require('express')
const router = express.Router()

const Youtube = require('../models/Youtube')

router.get('/youtube', (res) => {
    Youtube.find({}).then(youtube => res.json(youtube))
})