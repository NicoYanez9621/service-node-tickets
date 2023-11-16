import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Proveedores = sequelize.define(
  "proveedores",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    cuit: {
      type: DataTypes.STRING,
    },
    domicilio: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default Proveedores;
