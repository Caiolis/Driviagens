import { errors } from "../errors/errors.js";
import { cityRepository } from "../repository/city.repository.js";
import { flightRepository } from "../repository/flight.repository.js";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

async function bookFlight(origin, destination, date) {
    const today = dayjs()
    const flightDate = dayjs(date, "DD-MM-YYYY")
    if (flightDate < today) throw errors.invalidFlightDate()

    if (origin === destination) throw errors.equalCities()

    const city1 = await cityRepository.findById(origin)
    const city2 = await cityRepository.findById(destination)
    if (!city1 || !city2) throw errors.notFound("City")

    await flightRepository.insertFlightIntoDb(origin, destination, date)
};

async function findAllFlights(origin, destination, smallerDate, biggerDate) {
    if (biggerDate && !smallerDate || smallerDate && !biggerDate) {
        throw errors.invalidTravelDateAmount()
    }

    const smallerDateFormatted = dayjs(smallerDate, "DD-MM-YYYY").format("YYYY-MM-DD")
    const biggerDateFormatted = dayjs(biggerDate, "DD-MM-YYYY").format("YYYY-MM-DD")
    if (biggerDate && smallerDate && smallerDateFormatted >= biggerDateFormatted) {
        throw errors.invalidTravelDate()
    }

    const flights = await flightRepository.findAllFlightsIntoDb(origin, destination, smallerDateFormatted, biggerDateFormatted)
    return flights
};
export const flightService = { bookFlight, findAllFlights };