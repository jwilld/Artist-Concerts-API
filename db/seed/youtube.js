// format for youtube links
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=QUERY&key=[YOUR_API_KEY]'

import axios from "axios";
import fs from "fs";
import ArtistModel from "../../models/Artists.js";

let youtubeList = [];
// use your Youtube api key
const YOUR_API_KEY = "";
// have to get each artist from Artist database
ArtistModel.find({}).then((artists) =>
  artists.forEach((artist) => {
    const artistName = artist.name.replace(/\s/g, "%20");
    let query = `${artistName}%20concert`;
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${YOUR_API_KEY}`;
    // removes characters that would cause an unescaped character error
    url = encodeURI(url);
    axios
      .get(url)
      .then((response) => {
        try {
          response.data.items[0].artist = `${artist.name}`;
        } catch (e) {
          console.log(e);
        }
        youtubeList.push(response.data);
      })
      .catch(() => {
        //stops loop, reducing number of queries
        throw "ERROR: Data limit exceeded or invalid request.";
      })
      .then(() => {
        // only write file if youtubeList array is populated
        if (youtubeList.length > 0) {
          fs.writeFile(
            "youtube-ids-4.json",
            JSON.stringify(youtubeList),
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }
      });
  })
);
