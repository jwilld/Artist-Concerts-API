import express from "express";
import parser from "body-parser";
const app = express();

import artistController from "./controllers/artists.js";
const youtubeController = require("./controllers/youtube");
const hitsController = require("./controllers/hits");

app.use(parser.json());

app.use("/", artistsController);
app.use("/", youtubeController);
app.use("/", hitsController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(3003,()=> console.log('port 3003'))
