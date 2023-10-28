import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Users.js";
import "./models/Tickets.js";

const puerto = 3000;

async function main() {
  try {
    await sequelize.sync({
      force: true,
    });
    app.listen(puerto);
    console.log(`Sevidor corriendo en el puerto: ${puerto}`);
  } catch (error) {
    console.log("Error al conectar con base de datos: ", error);
  }
}

main();
