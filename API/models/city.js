import { DataTypes } from "sequelize"
import { sequelize } from "../config/db.js";
import { Route } from "./route.js";

export const City = sequelize.define("city", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

City.hasMany(Route, {
    foreignKey: 'cityId',
    sourceKey: 'id',
});

Route.belongsTo(City, {
    foreignKey: 'cityId',
    target: 'id',
});
