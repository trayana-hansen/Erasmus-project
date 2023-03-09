import express from "express";
import routeRoutes from "./routes/route.js";
import routeCities from "./routes/city.js";
import routerUser from "./routes/user.js";
import { verifyAccessToken } from "./controllers/JWT.js";

const app = express();

app.use(express.json());

app.use(verifyAccessToken, routeRoutes);
app.use(verifyAccessToken, routeCities);
app.use(verifyAccessToken, routerUser)


export default app;
