import express from "express"
import routerUser from "./routes/user.js";

const app = express()
app.use(express.json());
app.use(routerUser)
export default app;