import { config } from "dotenv";
import Sequelize from "sequelize";

config();

export const sequelize = new Sequelize({
  host: `${DATABASE_URL}`,
  dialect: "postgres",
});
