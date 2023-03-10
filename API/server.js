import express from "express";
import routeRoutes from "./routes/route.js";
import routeCities from "./routes/city.js";
import routeMonuments from "./routes/monument.js";
import routeProgresses from "./routes/progress.js";
import routeReviews from "./routes/review.js";
import routeRiddles from "./routes/riddle.js";

const app = express();

app.use(express.json());

app.use(
  routeRoutes,
  routeCities,
  routeMonuments,
  routeProgresses,
  routeReviews,
  routeRiddles
);

export default app;
