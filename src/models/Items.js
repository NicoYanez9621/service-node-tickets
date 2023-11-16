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
    references: {
      model: "remitos", // el nombre de tu tabla remitos
      key: "id",
    },
    allowNull: false,
  },
});

export default Item;
