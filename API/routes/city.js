import { Router } from "express";
import {
  createCity,
  getCities,
  getCity,
  updateCity,
  deleteCity,
} from "../controllers/city.js";

const router = Router();

router.get("/dl/cities", getCities);
router.post("/dl/city", createCity);
router.put("/dl/city/:id", updateCity);
router.delete("/dl/city/:id", deleteCity);
router.get("/dl/city/:id", getCity);

export default router;
