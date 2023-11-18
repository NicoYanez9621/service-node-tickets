import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const ProductosProveedores = sequelize.define(
  "productosProveedores",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

export default ProductosProveedores;
