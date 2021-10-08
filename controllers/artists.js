import express from "express";
const ArtistController = express.Router();

import ArtistModel from "../models/Artists.js";
import YoutubeModel from "../models/Youtube.js";
import HitsModel from "../models/Hits.js";

ArtistController.get("/artists", (req, res) => {
  ArtistModel.find({}).then((artists) => res.json(artists));
});

ArtistController.get("/", (req, res) => {
  res.redirect("/artists");
});

ArtistController.get("/artists/:name", (req, res) => {
  ArtistModel.find({ name: req.params.name }).then((artist) =>
    res.json(artist)
  );
});

ArtistController.post("/artists", (req, res) => {
  ArtistModel.create(req.body).then((artist) => res.json(artist));
});

ArtistController.delete("/artists/:name", (req, res) => {
  ArtistModel.findOneAndDelete({ name: req.params.name }).then(
    YoutubeModel.deleteMany({ name: req.params.name }).then(
      HitsModel.deleteMany({ name: req.params.name }).then(
        res.send(`Deleted ${req.params.name} from hits,artists and youtube`)
      )
    )
  );
});

export default ArtistController;
