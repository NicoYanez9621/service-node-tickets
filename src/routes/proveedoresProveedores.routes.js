import { Router } from "express";
import {
  createProveedor,
  getProveedores,
  deleteProveedor,
  updateProveedor,
  getProveedor,
} from "../controllers/proveedoresProveedores.controller.js";

const router = Router();

router.get("/clientes", getProveedores);
router.post("/clientes", createProveedor);
router.put("/clientes/:idProveedor", updateProveedor);
router.delete("/clientes/:idProveedor", deleteProveedor);
router.get("/clientes/:idProveedor", getProveedor);

export default router;
