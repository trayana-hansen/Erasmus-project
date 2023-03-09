import { Router } from "express";
import {
    createUser,
    updateUser,
    getUser,
    deleteUser,
    getUsers,
    login
} from "../controllers/user.js";

const router = Router();

// Routes
router.post("/dl/user/new", createUser);
router.get("/dl/user/login", login)
router.get("/dl/users", getUsers);
router.get("/dl/user/:id", getUser);
router.delete("/dl/user/:id", deleteUser);
router.put("/dl/user/:id", updateUser);


export default router;