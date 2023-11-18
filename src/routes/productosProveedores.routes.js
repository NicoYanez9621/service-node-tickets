import { Router } from "express";
import {
  createProductosProveedores,
  getProductos,
  deleteProducto,
  updateProducto,
  getProducto,
} from "../controllers/productosProveedores.controller.js";

const router = Router();

router.get("/productos", getProductos);
router.post("/productos", createProductosProveedores);
router.put("/productos/:idProducto", updateProducto);
router.delete("/productos/:idProducto", deleteProducto);
router.get("/productos/:idProducto", getProducto);

export default router;
