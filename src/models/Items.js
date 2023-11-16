import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Item = sequelize.define("item", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
  },
  unidad: {
    type: DataTypes.STRING,
  },
  remitoId: {
    type: DataTypes.INTEGER,
  },
});

export default Item;
