import { DataTypes } from "sequelize"
import { sequelize } from "../config/db.js";

export const Riddle = sequelize.define("riddle", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    riddleType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    }
})

