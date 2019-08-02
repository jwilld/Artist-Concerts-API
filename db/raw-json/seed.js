const mongoose = require('../connection')

const Artist = require('../../models/Artists')
let artists = require('./artists.json')

const Youtube = require('../../models/Youtube')
const youtube = require('./youtube.json')

const Genre = require('../../models/Genre')



Artist.deleteMany({}).then(Artist.create(artists))



Artist.find({}).then( artist => artist.forEach(artist => {
    youtube[artist.name].forEach(link => Youtube.deleteMany({})
    .then(Youtube.create({link:`https://www.youtube.com/watch?v=${link.id.videoId}`,name: artist.name})))
}))


Genre.find({}).then(Genre.deleteMany({}).then(artists.forEach(artist =>{
    artist.classifications.forEach(classification => {
        Genre.create({genre: classification.genre.name, name: artist.name})
    })
})))










