import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { passengerSchema } from "../schemas/passenger.schema.js"
import { passengerController } from "../controllers/passenger.controller.js"

const passengerRouter = Router()

passengerRouter.post("/passengers", validateSchema(passengerSchema), passengerController.createPassenger)
passengerRouter.get("/passengers/travels", passengerController.searchTravels)

export default passengerRouter