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
router.post("/dl/routes", createRoute);
router.put("/dl/routes/:id", updateRoute);
router.delete("/dl/routes/:id", deleteRoute);
router.get("/dl/routes/:id", getRoute);

export default router;
