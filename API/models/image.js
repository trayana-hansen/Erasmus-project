import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Route } from "./route.js";

export const Img = sequelize.define("img", {
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
