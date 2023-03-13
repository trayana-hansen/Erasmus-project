import multer from "multer";
import { Router } from "express";
import {
  createImage,
  getImages,
  getImage,
  updateImage,
  deleteImage,
} from "../controllers/image.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.get("/dl/images", getImages);
router.post("/dl/images", upload.single("img"), createImage);
router.put("/dl/images/:id", updateImage);
router.delete("/dl/images/:id", deleteImage);
router.get("/dl/images/:id", getImage);

export default router;
