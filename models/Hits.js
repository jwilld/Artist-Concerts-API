import mongoose from "../db/connection.js";

const Hits = new mongoose.Schema({
  title: String,
  full_title: String,
  primary_artist: {
    name: String,
  },
});

const HitsModel = mongoose.model("Hits", Hits);
export default HitsModel;
