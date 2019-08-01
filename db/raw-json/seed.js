const mongoose = require('../connection')

const Artist = require('../../models/Artists')
let artists = require('./artists.json')

const Youtube = require('../../models/Youtube')
const youtube = require('./youtube.json')




// Artist.deleteMany({}).then(Artist.create(artists))
// Youtube.deleteMany({}).then(Youtube.create(youtube))


Artist.find({}).then( artist => artist.forEach(artist => {
    youtube[artist.name].forEach(link => Youtube.deleteMany({})
    .then(Youtube
    .create({link:`https://www.youtube.com/watch?v=${link.id.videoId}`},{name: artist.name})))
}))
// youtube['Shoreline Mafia'].forEach(link => console.log(link.id.videoId))





