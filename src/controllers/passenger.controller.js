import httpStatus from "http-status"
import { passengerService } from "../services/passenger.service.js"

async function createPassenger(req, res) {
    const { firstName, lastName } = req.body

    await passengerService.createPassengerService(firstName, lastName)
    res.sendStatus(httpStatus.CREATED)
}

export const passengerController = { createPassenger };