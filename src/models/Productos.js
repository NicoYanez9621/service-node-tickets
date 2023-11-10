import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Productos = sequelize.define(
  "productos",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion_producto: {
      type: DataTypes.STRING,
    },
    valor_producto: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default Productos;
