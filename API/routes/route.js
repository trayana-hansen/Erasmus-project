import { Router } from "express";
import {
  createRoute,
  getRoutes,
  getRoute,
  updateRoute,
  deleteRoute,
} from "../controllers/route.js";

const router = Router();

router.get("/dl/routes", getRoutes);
router.post("/dl/route", createRoute);
router.put("/dl/route/:id", updateRoute);
router.delete("/dl/route/:id", deleteRoute);
router.get("/dl/route/:id", getRoute);

export default router;
