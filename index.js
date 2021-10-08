import express from "express";
import parser from "body-parser";
const app = express();

import ArtistController from "./controllers/artists.js";
import YoutubeController from "./controllers/youtube.js";
import HitsController from "./controllers/hits.js";

app.use(parser.json());

app.use("/", ArtistController);
app.use("/", YoutubeController);
app.use("/", HitsController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(3003,()=> console.log('port 3003'))
