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
router.post("/dl/cities", createCity);
router.put("/dl/cities/:id", updateCity);
router.delete("/dl/cities/:id", deleteCity);
router.get("/dl/cities/:id", getCity);

export default router;
