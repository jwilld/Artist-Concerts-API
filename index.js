import express from "express";
const app = express();

import ArtistController from "./controllers/artists.js";
import YoutubeController from "./controllers/youtube.js";
import HitsController from "./controllers/hits.js";

app.use(express.json());

app.use("/", ArtistController);
app.use("/", YoutubeController);
app.use("/", HitsController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

