import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Tickets = sequelize.define(
  "tickets",
  {
    id_ticket: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName_ticket: {
      type: DataTypes.STRING,
    },
    lastName_ticket: {
      type: DataTypes.STRING,
    },
    state_ticket: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default Tickets;
