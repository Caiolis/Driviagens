import { passengerRepositoryFunctions } from "../repository/passenger.repository.js"

async function createPassengerService(firstName, lastName) {
    await passengerRepositoryFunctions.insertPassengerDb(firstName, lastName)
}

async function searchTravels(name) {
    const travels = await passengerRepositoryFunctions.searchTravels(name)

    if (travels.length > 10) throw errors.tooManyResults()
 
    return travels
}

export const passengerService = { createPassengerService, searchTravels }