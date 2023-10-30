import { config } from "dotenv";
import Sequelize from "sequelize";

config();
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASS = process.env.DATABASE_PASS;
export const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASS,
  {
    host: DATABASE_URL,
    dialect: "postgres",
  }
);
