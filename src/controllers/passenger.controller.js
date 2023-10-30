import httpStatus from "http-status"
import { passengerService } from "../services/passenger.service.js"

async function createPassenger(req, res) {
    const { firstName, lastName } = req.body

    await passengerService.createPassengerService(firstName, lastName)
    res.sendStatus(httpStatus.CREATED)
}

async function searchTravels(req, res) {
    const { name } = req.query

    const travels = await passengerService.searchTravels(name)
    
    const formattedTravels = travels.map(travel => {
        return {...travel, travels: parseInt(travel.travels)}
    })

    res.send(formattedTravels)
}

export const passengerController = { createPassenger, searchTravels };