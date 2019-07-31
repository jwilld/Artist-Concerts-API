const mongoose = require('../../connection')
const Artist = require('../../models/Artists')
let artists = require('./artists.json')


Artist.deleteMany({}).then(Artist.create(artists))
console.log(artists)




 