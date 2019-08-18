const mongoose = require("../connection");

const Artist = require("../../models/Artists");
let artists = require("./all-genius-artists.json");

const Hits = require("../../models/Hits");
const hits = require("./genius-artists-hits.json");

const Youtube = require("../../models/Youtube");
const youtube = require("./youtube.json");

const Genre = require("../../models/Genre");

// Artist.deleteMany({}).then(Artist.create(artists))
// for(let i =0;i<= 677; i++){
//     console.log(`${artists[i].names} number ${i}`)
// }

// Artist.deleteMany({}).then(Artist.create(artists)).finally(()=> console.log('done seeding artists'))

Hits.find({}).then(
  Hits.deleteMany({}).then(
    hits.forEach(hit => 
      hit.forEach(hitSong =>{Hits.create(hitSong.result)
      })
    )
  )
).finally(console.log('done adding songs'))



// Artist.find({}).then( artist => artist.forEach(artist => {
//     youtube[artist.name].forEach(link => Youtube.deleteMany({})
//     .then(Youtube.create({link:`https://www.youtube.com/watch?v=${link.id.videoId}`,name: artist.name})))
// }))

// Genre.find({}).then(Genre.deleteMany({}).then(artists.forEach(artist =>{
//     artist.classifications.forEach(classification => {
//         Genre.create({genre: classification.genre.name, name: artist.name})
//     })
// })))
