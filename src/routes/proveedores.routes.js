import { Router } from "express";
import {
  createProveedor,
  getProveedores,
  deleteProveedor,
  updateProveedor,
  getProveedor,
} from "../controllers/proveedores.controller.js";

const router = Router();

router.get("/proveedores", getProveedores);
router.post("/proveedores", createProveedor);
router.put("/proveedores/:idProveedor", updateProveedor);
router.delete("/proveedores/:idProveedor", deleteProveedor);
router.get("/proveedores/:idProveedor", getProveedor);

export default router;
