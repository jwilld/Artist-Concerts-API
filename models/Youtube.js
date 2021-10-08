import mongoose from "../db/connection.js";

const Youtube = new mongoose.Schema({
  name: String,
  link: String,
});

const YoutubeModel = mongoose.model("Youtube", Youtube);
export default YoutubeModel;
