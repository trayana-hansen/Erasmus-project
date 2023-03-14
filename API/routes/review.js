import { Router } from "express";
import {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
} from "../controllers/review.js";

const router = Router();

router.get("/dl/reviews", getReviews);
router.post("/dl/reviews", createReview);
router.put("/dl/reviews/:id", updateReview);
router.delete("/dl/reviews/:id", deleteReview);
router.get("/dl/reviews/:id", getReview);

export default router;
