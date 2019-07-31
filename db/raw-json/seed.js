const Ticketmaster = require('../../models/Ticketmaster')
let artists = require('./artists.json')


// Ticketmaster.deleteMany({}).then(Ticketmaster.create(artists))

// console.log(artists[2]._embedded.attractions[2].name)
// console.log(Ticketmaster)

console.log(artists.attractions[0].name)

artists.attractions.forEach(attraction => console.log(attraction))
 