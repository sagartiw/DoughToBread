// models/post.js
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  header: String,
  author: String, //change this to user object later
  description: String,
  imageLink: String,
  comments: Array,
  likes: Number
});

const Post = mongoose.model("BlogArticle", postSchema);

export default Post;
