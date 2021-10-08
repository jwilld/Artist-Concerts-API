import mongoose from "../db/connection.js";

const Artist = new mongoose.Schema({
  name: String,
  alternate_names: [
    {
      type: String,
    },
  ],
  twitter_name: String,
  hits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hits",
    },
  ],
});

const ArtistModel = mongoose.model("Artist", Artist);

export default ArtistModel;
