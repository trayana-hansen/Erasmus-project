import express from "express";
import routeRoutes from "./routes/route.js";
import routeCities from "./routes/city.js";
import routerUser from "./routes/user.js";
import { verifyAccessToken } from "./controllers/JWT.js";
import routeMonuments from "./routes/monument.js";
import routeProgresses from "./routes/progress.js";
import routeReviews from "./routes/review.js";
import routeRiddles from "./routes/riddle.js";

const app = express();

app.use(express.json());

app.use(verifyAccessToken, routeRoutes);
app.use(verifyAccessToken, routeCities);
app.use(verifyAccessToken, routerUser);
app.use(verifyAccessToken, routeMonuments);
app.use(verifyAccessToken, routeProgresses);
app.use(verifyAccessToken, routeReviews);
app.use(verifyAccessToken, routeRiddles);

export default app;
