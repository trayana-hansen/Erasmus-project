import { DataTypes } from "sequelize"
import { sequelize } from "../config/db.js";
import { Monument } from "./monument.js";
import { Review } from "./review.js";

export const Route = sequelize.define("route", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accesibility: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Route.hasMany(Monument, {
    foreignKey: 'routeId',
    sourceKey: 'id',
    // onDelete: 'RESTRICT',
    // onUpdate: 'RESTRICT'
});

Monument.belongsTo(Route, {
    foreignKey: 'routeId',
    target: 'id',
});

Route.hasMany(Review, {
    foreignKey: 'routeId',
    sourceKey: 'id',
    // onDelete: 'RESTRICT',
    // onUpdate: 'RESTRICT'
});

Review.belongsTo(Route, {
    foreignKey: 'routeId',
    target: 'id',
});
