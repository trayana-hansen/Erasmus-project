import express from "express";
import routeRoutes from "./routes/route.js";
import routeCities from "./routes/city.js";
import routerUser from "./routes/user.js";
import { verifyAccessToken } from "./controllers/JWT.js";
import routeMonuments from "./routes/monument.js";
import routeProgresses from "./routes/progress.js";
import routeReviews from "./routes/review.js";
import routeRiddles from "./routes/riddle.js";
import routeImages from "./routes/image.js";

const app = express();

app.use(express.json());

app.use(routeImages);
app.use(routerUser);
app.use(verifyAccessToken.bind(), routeRoutes);
app.use(verifyAccessToken.bind(), routeCities);
app.use(verifyAccessToken.bind(), routeMonuments);
app.use(verifyAccessToken.bind(), routeProgresses);
app.use(verifyAccessToken.bind(), routeReviews);
app.use(verifyAccessToken.bind(), routeRiddles);

export default app;
