import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import ProductosProveedores from "./ProductosProveedores.js";
import ProveedoresProveedores from "./ProveedoresProveedores.js";
import ItemsProveedores from "./ItemsProveedores.js";

const RemitosProveedores = sequelize.define(
  "remitosProveedores",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaEmision: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
  }
);

RemitosProveedores.belongsTo(ProveedoresProveedores, {
  foreignKey: "clienteId",
  as: "proveedor",
});

RemitosProveedores.belongsToMany(ProductosProveedores, {
  through: ItemsProveedores,
  foreignKey: "remitoProveedorId",
  as: "productos", // Agrega un alias aquí
});

ProductosProveedores.belongsToMany(RemitosProveedores, {
  through: ItemsProveedores,
  foreignKey: "productoProveedorId",
});

export default RemitosProveedores;
