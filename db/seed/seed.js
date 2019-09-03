const mongoose = require("../connection");

const Artist = require("../../models/Artists");
let artists = require("./all-genius-artists.json");

let artists2 = require("./artists.json")

const Hits = require("../../models/Hits");
const hits = require("./genius-artists-hits.json");

const Youtube = require("../../models/Youtube");
const youtube = require("./youtube-ids-2.json");

const Genre = require("../../models/Genre");



Artist.deleteMany({})
  .then(Artist.create(artists))
  .then( console.log("done seeding artists")).then(
    Hits.find({})
      .then(
        Hits.deleteMany({}).then(
          hits.forEach(hit =>
            hit.forEach(hitSong => {
              Hits.create(hitSong.result);
            })
          )
        )
      )
      .then(console.log("done adding songs"))
  ).then(
    Artist.find({}).then(artists => {
      Hits.find({}).then(hits => {
        artists.forEach(artist => {
          hits.forEach(hit => {
            if (artist.name === hit.primary_artist.name) {
              artist.hits.push(hit);
            }
          })
          artist.save().catch(e => console.log(e))
        });
      });
    }).then(console.log('done seeding artist and hits refs'))
  ).then(
    Artist.find({}).then(artist =>
      artist.forEach(artist => {
        youtube[artist.name].forEach(link =>
          Youtube.deleteMany({}).then(
            Youtube.create({
              link: `https://www.youtube.com/watch?v=${link.id.videoId}`,
              name: artist.name
            })
          )
        );
      })
    ).then(console.log('done seeding youtube links'))
  ).then(
    Genre.find({}).then(
      Genre.deleteMany({}).then(
        artists2.forEach(artist => {
          artist.classifications.forEach(classification => {
            Genre.create({ genre: classification.genre.name, name: artist.name });
          });
        })
      )
    ).then(console.log('done seeding genres'))
  ).finally(console.log('ALL SEEDING COMPLETED'))

  

