import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Productos from "./Productos.js";

const Remitos = sequelize.define(
  "remitos",
  {
    id_remito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstNameEmisor_remito: {
      type: DataTypes.STRING,
    },
    firstNameReceptor_remito: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Remitos.hasMany(Productos, {
  foreignKey: "remito_id",
  sourceKey: "id_remito",
});

Productos.belongsTo(Remitos, {
  foreignKey: "remito_id",
  targetId: "id_producto",
});

export default Remitos;
