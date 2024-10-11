import express from "express";
import { authenticateToken } from "../middleware/authenticate";
import { subscribeMail } from "../controllers/main/mainController";
const router = express.Router();
router.route("/subscribe").post(subscribeMail);
export default router;
