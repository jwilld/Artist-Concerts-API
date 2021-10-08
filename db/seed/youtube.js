// format for youtube links
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=QUERY&key=[YOUR_API_KEY]'

import axios from "axios";
const fs = require("fs");
const Artist = require("../../models/Artists");

let youtubeList = [];

// have to get each artist from Artist database
Artist.find({}).then((artists) =>
  artists.forEach((artist) => {
    let query = `${artist.name}%20concert`;
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKeyFour}`;
    axios
      .get(url)
      .then((response) => {
        response.data.items[0].artist = `${artist.name}`;
        youtubeList.push(response.data);
      })
      // .then(()=> console.log(JSON.stringify(youtubeList))).catch(e => console.log(e))
      .then(() =>
        fs.writeFile(
          "youtube-ids-3.json",
          JSON.stringify(youtubeList),
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        )
      )
      .catch((e) => console.log(e));
  })
);
