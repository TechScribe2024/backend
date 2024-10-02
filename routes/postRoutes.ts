import express from "express";
import {
  createPost,
  deletePost,
  updatePost,
} from "../controllers/posts/postController";
import { authenticateToken } from "../middleware/authenticate";

const router = express.Router();

router.route("/createPost").post(authenticateToken, createPost);

router.route("/deletePost/:id").delete(authenticateToken, deletePost);

router.route("/updatePost/:id").put(authenticateToken, updatePost);

export default router;
