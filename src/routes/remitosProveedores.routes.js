import { Router } from "express";
import {
  getRemitosProveedores,
  // createRemitoProveedor,
  // updateRemito,
  deleteRemito,
  getRemito,
} from "../controllers/remitosProveedores.controller.js";

const router = Router();

router.get("/remitos", getRemitosProveedores);
// router.post("/remitos", createRemitoProveedor);
// router.put("/remitos/:idRemito", updateRemito);
router.delete("/remitos/:idRemito", deleteRemito);
router.get("/remitos/:idRemito", getRemito);

export default router;
