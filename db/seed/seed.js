import ArtistModel from "../../models/Artists.js";
import * as artists from "./all-genius-artists.json";

import HitsModel from "../../models/Hits.js";
import * as hits from "./genius-artists-hits.json";
console.log(hits);

import YoutubeModel from "../../models/Youtube.js";
import * as youtube from "./youtube-ids-2.json";

ArtistModel.deleteMany({})
  .then(ArtistModel.create(artists))
  .then(console.log("done seeding artists"))
  .then(
    HitsModel.find({})
      .then(
        HitsModel.deleteMany({}).then(
          hits.default.forEach((hit) =>
            hit.forEach((hitSong) => {
              HitsModel.create(hitSong.result);
            })
          )
        )
      )
      .then(console.log("done adding songs"))
  )
  .then(
    ArtistModel.find({})
      .then((artists) => {
        HitsModel.find({}).then((hits) => {
          artists.forEach((artist) => {
            hits.forEach((hit) => {
              if (artist.name === hit.primary_artist.name) {
                artist.hits.push(hit);
              }
            });
            artist.save().catch((e) => console.log(e));
          });
        });
      })
      .then(console.log("done seeding artist and hits refs"))
  )
  .then(
    ArtistModel.find({})
      .then((artist) =>
        artist.forEach((artist) => {
          youtube[artist.name].forEach((link) => {
            console.log(link);
            YoutubeModel.deleteMany({}).then(
              YoutubeModel.create({
                link: `https://www.youtube.com/watch?v=${link.id.videoId}`,
                name: artist.name,
              })
            );
          });
        })
      )
      .then(console.log("done seeding youtube links"))
  )
  .finally(console.log("ALL SEEDING COMPLETED"));
