import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { flightSchema } from "../schemas/flight.schema.js";
import { flightController } from "../controllers/flight.controller.js";

const flightRouter = Router()

flightRouter.post("/flights", validateSchema(flightSchema), flightController.bookFlight);
flightRouter.get("/flights", flightController.findAllFlights);

export default flightRouter;