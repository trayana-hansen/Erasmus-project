import { Router } from "express";
import {
  createProgress,
  getProgresses,
  getProgress,
  updateProgress,
  deleteProgress,
} from "../controllers/progress.js";

const router = Router();

router.get("/dl/progresses", getProgresses);
router.post("/dl/progress", createProgress);
router.put("/dl/progress/:userId/:routeId", updateProgress);
router.delete("/dl/progress/:userId/:routeId", deleteProgress);
router.get("/dl/progress/:userId/:routeId", getProgress);

export default router;
