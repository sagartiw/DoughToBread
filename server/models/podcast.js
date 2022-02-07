// models/podcast.js
import mongoose from "mongoose";

const podcastSchema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
  length: Number, //in seconds
  audioFile: String, //mp3 link
});

const Podcast = mongoose.model("BlogArticle", podcastSchema);

export default Podcast;
