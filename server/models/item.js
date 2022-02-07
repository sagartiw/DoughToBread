// models/item.js
import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  price: Number,
  title: String,
  description: String,
  imageLink: String
});

const Item = mongoose.model("BlogArticle", itemSchema);

export default Item;