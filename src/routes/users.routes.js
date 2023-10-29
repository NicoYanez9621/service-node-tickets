import { Router } from "express";
import {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:idUser", updateUser);
router.delete("/users/:idUser", deleteUser);
router.get("/users/:idUser", getUser);

export default router;
