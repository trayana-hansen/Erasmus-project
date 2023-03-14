import Sequelize from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PSWD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
)