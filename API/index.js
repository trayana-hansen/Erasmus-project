import app from "./server.js";
import { sequelize } from "./config/db.js";
import dotenv from "dotenv";
import "./models/riddle.js";
import "./models/route.js";
import "./models/monument.js";
import "./models/city.js";
import "./models/review.js";
import "./models/user.js";
import "./models/progress.js";

dotenv.config();
async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(process.env.SERVER_PORT);
    console.log("Server Running");
  } catch {
    console.log("Unable to connect to Database");
  }
}

main();
