// routes/blogPosts.routes.js
import express from "express";

import {
  test,
  addUser
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", test);
router.post("/adduser", addUser);

export default router;