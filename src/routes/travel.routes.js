import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { travelSchema } from "../schemas/travel.schema.js";
import { travelController } from "../controllers/travel.controller.js";

const travelRouter = Router();

travelRouter.post("/travels", validateSchema(travelSchema), travelController.bookTravel);

export default travelRouter;