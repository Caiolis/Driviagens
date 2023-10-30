import { errors } from "../errors/errors.js";
import { flightRepository } from "../repository/flight.repository.js";
import { passengerRepository } from "../repository/passenger.repository.js";
import { travelRepository } from "../repository/travel.repository.js";

async function bookTravel(passengerId, flightId) {
    const passenger = await passengerRepository.findById(passengerId)
    if (!passenger) throw errors.notFound("Passenger")

    const flight = await flightRepository.findById(flightId)
    if (!flight) throw errors.notFound("Flight")

    await travelRepository.insertTravelIntoDb(passengerId, flightId)
};

export const travelService = { bookTravel };