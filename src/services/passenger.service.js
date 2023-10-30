import { passengerRepositoryFunctions } from "../repository/passenger.repository.js"

async function createPassengerService(firstName, lastName) {
    await passengerRepositoryFunctions.insertPassengerDb(firstName, lastName)
}

export const passengerService = { createPassengerService }