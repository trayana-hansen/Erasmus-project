import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Route } from "./route.js";
import { User } from "./user.js";

export const Progress = sequelize.define("progress", {
  percentage: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

User.belongsToMany(Route, {
  through: "progress",
});

Route.belongsToMany(User, {
  through: 'progress',
});
