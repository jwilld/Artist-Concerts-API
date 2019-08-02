const express = require("express");
const router = express.Router();

const Artist = require("../models/Artists");
const Youtube = require("../models/Youtube");

router.get("/artists", (req, res) => {
  Artist.find({}).then(artists => res.json(artists));
});

router.get("/", (req, res) => {
  res.redirect("/artists");
});

router.post("/artists", (req, res) => {
  Artist.create(req.body).then(artist => res.json(artist));
});

router.delete('/artists/:name',(req,res) => {
    Artist.findOneAndDelete({name: req.params.name}).then(res.send(`${req.params.name} deleted`))
})
module.exports = router;
