import { Router } from "express";
import {
  createProductos,
  getProductos,
  deleteProducto,
  updateProducto,
  getProducto,
} from "../controllers/productos.controller.js";

const router = Router();

router.get("/productos", getProductos);
router.post("/productos", createProductos);
router.put("/productos/:idProducto", updateProducto);
router.delete("/productos/:idProducto", deleteProducto);
router.get("/productos/:idProducto", getProducto);

export default router;
