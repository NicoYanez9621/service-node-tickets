import { Router } from "express";
import {
  createTickets,
  getTickets,
  deleteTicket,
  updateTicket,
  getTicket,
} from "../controllers/tickets.controller.js";

const router = Router();

router.get("/tickets", getTickets);
router.post("/tickets", createTickets);
router.put("/tickets/:idTicket", updateTicket);
router.delete("/tickets/:idTicket", deleteTicket);
router.get("/tickets/:idTicket", getTicket);

export default router;
