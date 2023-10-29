import express from "express";
import usersRoutes from "./routes/users.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use("/api", usersRoutes);

export default app;
