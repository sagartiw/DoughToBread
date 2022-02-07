// models/video.js
import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
  length: Number, //in seconds
  audioFile: String, //mp3 link
});

const Video = mongoose.model("BlogArticle", videoSchema);

export default Video;