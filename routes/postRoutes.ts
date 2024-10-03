import express from "express";
import { authenticateToken } from "../middleware/authenticate";
import {
  createPost,
  deletePost,
  updatePost,
} from "../controllers/posts/postController";

const router = express.Router();

router.route("/createPost").post(authenticateToken, createPost);

router.route("/deletePost/:id").delete(authenticateToken, deletePost);

router.route("/updatePost/:id").put(authenticateToken, updatePost);

export default router;
