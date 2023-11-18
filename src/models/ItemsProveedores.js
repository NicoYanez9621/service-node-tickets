import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const ItemProveedores = sequelize.define("itemProveedores", {
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

export default ItemProveedores;
