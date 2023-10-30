import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { passengerSchema } from "../schemas/passengerSchema.js"
import { passengerController } from "../controllers/passenger.controller.js"

const passengerRouter = Router()

passengerRouter.post("/passengers", validateSchema(passengerSchema), passengerController.createPassenger)

export default passengerRouter