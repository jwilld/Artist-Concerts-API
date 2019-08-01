const mongoose = require('../../connection')

const Artist = require('../../models/Artists')
let artists = require('./artists.json')

const Youtube = require('../../models/Youtube')
const youtube = require('./youtube.json')


// Artist.deleteMany({}).then(Artist.create(artists))

console.log(youtube['Rich Brian'][0].id.videoId)
// Youtube.deleteMany({}).then(Youtube.create(youtube))



 