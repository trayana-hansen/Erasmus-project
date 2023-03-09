import express from "express";
import routeRoutes from "./routes/route.js";
import routeCities from "./routes/city.js";
import routerUser from "./routes/user.js";

const app = express();

app.use(express.json());

app.use(routeRoutes, routeCities, routerUser);


export default app;
