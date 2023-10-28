import Sequelize from "sequelize";

export const sequelize = new Sequelize("ticketsdb", "postgres", "Nico2023", {
  host: "localhost",
  dialect: "postgres",
});
