// blogPosts.controller.js
import express from "express";
import User from "../models/user.js";

const router = express.Router();

export const test = async (req, res) => {
  res.send("It works");
}

export const addUser = async (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({
    username,
    password
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;