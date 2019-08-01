const mongoose = require('../connection')

const Artist = require('../../models/Artists')
let artists = require('./artists.json')

const Youtube = require('../../models/Youtube').default.default
// const youtube = require('./youtube.json')


Artist.deleteMany({}).then(Artist.create(artists))





