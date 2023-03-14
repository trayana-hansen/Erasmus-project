import { DataTypes } from "sequelize"
import { sequelize } from "../config/db.js";

export const Review = sequelize.define("review", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message: {
        type: DataTypes.STRING,
    },
    tittle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    grade: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
})