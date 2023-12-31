import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Productos from "./Productos.js";
import Proveedores from "./Proveedores.js";
import Item from "./Items.js";

const Remitos = sequelize.define(
  "remitos",
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

// En tu modelo Remitos
Remitos.belongsTo(Proveedores, { foreignKey: "proveedorId" });
Remitos.belongsToMany(Productos, { through: Item, foreignKey: "remitoId" });
Productos.belongsToMany(Remitos, { through: Item, foreignKey: "productoId" });

export default Remitos;
