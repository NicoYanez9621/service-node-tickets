import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Tickets from "./Tickets.js";

const Users = sequelize.define(
  "users",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName_user: {
      type: DataTypes.STRING,
    },
    lastName_user: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Users.hasMany(Tickets, {
  foreignKey: "user_id",
  sourceKey: "id_user",
});

Tickets.belongsTo(Users, {
  foreignKey: "user_id",
  targetId: "id_ticket",
});

export default Users;
