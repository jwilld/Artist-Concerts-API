const express = require("express");
const router = express.Router();

const Youtube = require("../models/Youtube");

router.get("/youtube", (req, res) => {
  Youtube.find({}).then(youtube => res.json(youtube));
});

router.put("/:name", (req, res) => {
  Youtube.findOneAndUpdate(
    { name: req.params.name },
    { $set: { link: req.body.link } }
  );
});



module.exports = router;
