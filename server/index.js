import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import locationRoute from "./routes/api/location.js";
import { updateLocations } from "./controllers/location.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

connectDB().then(updateLocations);

app.use("/location", locationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
