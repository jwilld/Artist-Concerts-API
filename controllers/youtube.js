import express from "express";
const YoutubeController = express.Router();

import YoutubeModel from "../models/Youtube.js";

YoutubeController.get("/youtube", (req, res) => {
  YoutubeModel.find({}).then((youtube) => res.json(youtube));
});

YoutubeController.get("/youtube/:name", (req, res) => {
  YoutubeModel.find({ name: req.params.name }).then((links) => res.json(links));
});

YoutubeController.put("/:name", (req, res) => {
  YoutubeModel.findOneAndUpdate(
    { name: req.params.name },
    { $set: { link: req.body.link } }
  );
});

export default YoutubeController;
