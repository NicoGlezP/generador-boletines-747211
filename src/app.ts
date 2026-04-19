import express from "express";
import boletinesRoutes from "./routes/boletines";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/boletines", boletinesRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});