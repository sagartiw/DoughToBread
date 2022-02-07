// models/user.js
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  type: String,
  premium: Boolean,
  career: String,
  wallet: Number,
  tribes: Array,
  location: String,
  notifications: Array,
  orders: Array,
  posts: Array
});

const User = mongoose.model("BlogArticle", userSchema);

export default User;