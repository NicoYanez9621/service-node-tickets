import { config } from "dotenv";
import app from "./app.js";
import { sequelize } from "./database/database.js";
config();
const puerto = process.env.PORT;

async function main() {
  try {
    await sequelize.sync({
      force: false,
    });
    app.listen(puerto);
    console.log(`Sevidor corriendo en el puerto: ${puerto}`);
  } catch (error) {
    console.log("Error al conectar con base de datos: ", error);
  }
}

main();
