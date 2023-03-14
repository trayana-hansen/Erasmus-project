import { DataTypes } from "sequelize"
import { sequelize } from "../config/db.js";
import { Route } from "./route.js";
import { Review } from "./review.js";

export const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    // firstname: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // lastname: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    // country: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // }
})

User.hasMany(Review, {
    foreignKey: 'userId',
    sourceKey: 'id',
    // onDelete: 'RESTRICT',
    // onUpdate: 'RESTRICT'
});

Review.belongsTo(User, {
    foreignKey: 'userId',
    target: 'id',
});