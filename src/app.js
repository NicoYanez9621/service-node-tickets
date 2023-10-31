import express from "express";
import usersRoutes from "./routes/users.routes.js";
import ticketsRoutes from "./routes/tickets.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use("/api", usersRoutes);
app.use("/api", ticketsRoutes);

export default app;
