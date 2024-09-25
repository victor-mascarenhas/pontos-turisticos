import express from "express";
import { getAllLocations } from "../../controllers/location.js";

const router = express.Router();

router.get("/", getAllLocations);

export default router;
