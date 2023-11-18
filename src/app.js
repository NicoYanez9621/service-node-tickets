import express from "express";
import cors from "cors";
import remitosRoutes from "./routes/remitos.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import remitosProveedoresRoutes from "./routes/remitosProveedores.routes.js";
import productosProveedoresRoutes from "./routes/productosProveedores.routes.js";
import proveedoresProveedoresRoutes from "./routes/proveedoresProveedores.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/empresa", remitosRoutes);
app.use("/api/empresa", productosRoutes);
app.use("/api/empresa", proveedoresRoutes);

app.use("/api/proveedor", remitosProveedoresRoutes);
app.use("/api/proveedor", productosProveedoresRoutes);
app.use("/api/proveedor", proveedoresProveedoresRoutes);

export default app;
