const mongoose = require("../connection");

const Artist = require("../../models/Artists");
let artists = require("./all-genius-artists.json");

let artists2 = require("./artists.json")

const Hits = require("../../models/Hits");
const hits = require("./genius-artists-hits.json");

const Youtube = require("../../models/Youtube");
const youtube = require("./youtube-ids-2.json");

const Genre = require("../../models/Genre");



// Artist.deleteMany({})
//   .then(Artist.create(artists))
//   .finally(() => console.log("done seeding artists"));

// Hits.find({})
//   .then(
//     Hits.deleteMany({}).then(
//       hits.forEach(hit =>
//         hit.forEach(hitSong => {
//           Hits.create(hitSong.result);
//         })
//       )
//     )
//   )
//   .finally(console.log("done adding songs"));

Artist.find({}).then(artists => {
  Hits.find({}).then(hits => {
    artists.forEach(artist => {
      hits.forEach(hits => {
        if (artist.name === hits.primary_artist.name) {
          artist.hits.push(hits);
        }
        artist.save();
      });
    });
  });
});

// Artist.find({}).then(artist =>
//   artist.forEach(artist => {
//     youtube[artist.name].forEach(link =>
//       Youtube.deleteMany({}).then(
//         Youtube.create({
//           link: `https://www.youtube.com/watch?v=${link.id.videoId}`,
//           name: artist.name
//         })
//       )
//     );
//   })
// );

// Genre.find({}).then(
//   Genre.deleteMany({}).then(
//     artists2.forEach(artist => {
//       artist.classifications.forEach(classification => {
//         Genre.create({ genre: classification.genre.name, name: artist.name });
//       });
//     })
//   )
// );
// Youtube.find({}).then(
//   youtube.forEach(response => {
//     response.items.forEach(item =>
//       Youtube.create({
//         link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
//         name: response.items[0].artist
//       })
//     );
//   })
// );
