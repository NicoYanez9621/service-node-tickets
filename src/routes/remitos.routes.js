import { Router } from "express";
import {
  getRemitos,
  createRemito,
  updateRemito,
  deleteRemito,
  getRemito,
  getRemitoProductos,
} from "../controllers/remitos.controller.js";

const router = Router();

router.get("/remitos", getRemitos);
router.post("/remitos", createRemito);
router.put("/remitos/:idRemito", updateRemito);
router.delete("/remitos/:idRemito", deleteRemito);
router.get("/remitos/:idRemito", getRemito);

router.get("/remitos/:idRemito/productos", getRemitoProductos);

export default router;
