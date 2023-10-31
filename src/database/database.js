import { config } from "dotenv";
import Sequelize from "sequelize";

config();
const DATABASE_URL = process.env.DATABASE_URL;

// usar de manera Local
// export const sequelize = new Sequelize({
//   host: `${DATABASE_URL}`,
//   dialect: "postgres",
// });

export const sequelize = new Sequelize(`${DATABASE_URL}`);
