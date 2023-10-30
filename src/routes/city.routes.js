import { Router } from "express";
import { cityController } from "../controllers/city.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/city.schema.js";

const cityRouter = Router();

cityRouter.post("/cities", validateSchema(citySchema), cityController.createCity);

export default cityRouter;