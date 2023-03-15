import { Router } from "express";
import {
  createRoute,
  getRoutes,
  getRoutesByCity,
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
router.get("/dl/city/routes/:cityId", getRoutesByCity);

export default router;
