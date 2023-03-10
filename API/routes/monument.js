import { Router } from "express";
import {
  createMonument,
  getMonuments,
  getMonument,
  updateMonument,
  deleteMonument,
} from "../controllers/monument.js";

const router = Router();

router.get("/dl/monuments", getMonuments);
router.post("/dl/monuments", createMonument);
router.put("/dl/monuments/:id", updateMonument);
router.delete("/dl/monuments/:id", deleteMonument);
router.get("/dl/monuments/:id", getMonument);

export default router;
