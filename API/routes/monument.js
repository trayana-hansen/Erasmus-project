import { Router } from "express";
import {
  createMonument,
  getMonuments,
  getMonument,
  updateMonument,
  deleteMonument,
  getMonumentsByRoute
} from "../controllers/monument.js";

const router = Router();

router.get("/dl/monuments", getMonuments);
router.post("/dl/monument", createMonument);
router.put("/dl/monuments/:id", updateMonument);
router.delete("/dl/monuments/:id", deleteMonument);
router.get("/dl/monuments/:id", getMonument);
router.get("/dl/route/monuments/:routeId", getMonumentsByRoute);

export default router;
