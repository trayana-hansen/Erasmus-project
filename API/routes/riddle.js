import { Router } from "express";
import {
  createRiddle,
  getRiddles,
  getRiddle,
  updateRiddle,
  deleteRiddle,
} from "../controllers/riddle.js";

const router = Router();

router.get("/dl/riddles", getRiddles);
router.post("/dl/riddles", createRiddle);
router.put("/dl/riddles/:id", updateRiddle);
router.delete("/dl/riddles/:id", deleteRiddle);
router.get("/dl/riddles/:id", getRiddle);

export default router;
