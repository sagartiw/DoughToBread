// models/livestream.js
import mongoose from "mongoose";

const livestreamSchema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
  length: Number, //in seconds
  audioFile: String, //mp3 link
});

const Livestream = mongoose.model("BlogArticle", livestreamSchema);

export default Livestream;
