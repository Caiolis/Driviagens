import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { passengerSchema } from "../schemas/passengerSchema.js"
import { passengerController } from "../controllers/passenger.controller.js"

const passengerRouter = Router()

passengerRouter.post("/passengers", validateSchema(passengerSchema), passengerController.createPassenger)
passengerRouter.get("/passengers/travels", passengerController.searchTravels)

export default passengerRouter