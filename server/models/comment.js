// models/post.js
import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  author: String, //change this to user object later
  description: String,
  likes: Number
});

const Comment = mongoose.model("BlogArticle", commentSchema);

export default Comment;
