import { DataTypes } from "sequelize"
import { sequelize } from "../config/db.js";
import { Riddle } from "./riddle.js";

export const Monument = sequelize.define("monument", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Monument.hasOne(Riddle, {
    foreignKey: 'monumentId',
    sourceKey: 'id',
});

Riddle.belongsTo(Monument, {
    foreignKey: 'monumentId',
    target: 'id',
});
