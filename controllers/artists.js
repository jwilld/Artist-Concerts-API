import express from "express";
const artistController = express.Router();

import ArtistModel from "../models/Artists.js";
const Youtube = require("../models/Youtube");
const Hits = require("../models/Hits");

artistController.get("/artists", (req, res) => {
  ArtistModel.find({}).then((artists) => res.json(artists));
});

artistController.get("/", (req, res) => {
  res.redirect("/artists");
});

artistController.get("/artists/:name", (req, res) => {
  ArtistModel.find({ name: req.params.name }).then((artist) => res.json(artist));
});

artistController.post("/artists", (req, res) => {
  ArtistModel.create(req.body).then((artist) => res.json(artist));
});

artistController.delete("/artists/:name", (req, res) => {
  ArtistModel.findOneAndDelete({ name: req.params.name }).then(
    Youtube.deleteMany({ name: req.params.name }).then(
      Hits.deleteMany({ name: req.params.name }).then(
        res.send(`Deleted ${req.params.name} from hits,artists and youtube`)
      )
    )
  );
});

export default Router;
