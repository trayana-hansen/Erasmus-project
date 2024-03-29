import { Router } from "express";
import {
    createUser,
    updateUser,
    getUser,
    deleteUser,
    getUsers,
    login
} from "../controllers/user.js";
import { verifyAccessToken } from "../controllers/JWT.js";

const router = Router();

// Routes
router.post("/dl/user/new", createUser);
router.post("/dl/user/login", login)
router.get("/dl/users", getUsers);
router.get("/dl/user/:id", getUser);
router.delete("/dl/user/:id", deleteUser);
router.put("/dl/user/:id", updateUser);
// router.get("/dl/users", verifyAccessToken.bind(), getUsers);
// router.get("/dl/user/:id", verifyAccessToken.bind(), getUser);
// router.delete("/dl/user/:id", verifyAccessToken.bind(), deleteUser);
// router.put("/dl/user/:id", verifyAccessToken.bind(), updateUser);


export default router;