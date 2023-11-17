import express from "express";
import cors from "cors";
import remitosRoutes from "./routes/remitos.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api", remitosRoutes);
app.use("/api", productosRoutes);
app.use("/api", proveedoresRoutes);

export default app;
