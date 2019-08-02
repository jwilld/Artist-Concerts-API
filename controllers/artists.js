const express = require("express");
const router = express.Router();

const Artist = require("../models/Artists");
const Youtube = require("../models/Youtube");
const Genre = require("../models/Genre");

router.get("/artists", (req, res) => {
  Artist.find({}).then(artists => res.json(artists));
});

router.get("/", (req, res) => {
  res.redirect("/artists");
});

router.post("/artists", (req, res) => {
  Artist.create(req.body).then(artist => res.json(artist));
});

router
  .delete("/artists/:name", (req, res) => {
    Artist.findOneAndDelete({ name: req.params.name }).then(
      res.send(`${req.params.name} deleted from artists`)
    );
  })
  .then(
    Youtube.deleteMany({ name: req.params.name }).then(
      res.send(`Deleted youtube links for ${req.params.name}`)
    )
  )
  .then(
    Genre.deleteMany({ name: req.params.name }).then(
      res.send(`Deleted ${req.params.name}'s genre`)
    )
  );
module.exports = router;
