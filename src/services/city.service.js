import { errors } from "../errors/errors.js"
import { cityRepository } from "../repository/city.repository.js"

async function createCity(cityName) {
    const city = await cityRepository.findByName(cityName)
    if (city) throw errors.conflict("city")

    await cityRepository.insertCity(cityName)
}

export const cityService = { createCity, findById, findByName }