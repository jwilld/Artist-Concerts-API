import express from "express";
const HitsController = express.Router();

import Hits from "../models/Hits.js";

HitsController.get("/hits", (req, res) => {
  Hits.find({}).then((hits) => res.json(hits));
});
HitsController.post("/hits", (req, res) => {
  Hits.create(req.body).then((hits) => res.json(hits));
});
export default HitsController;
