import dayjs from "dayjs";
import { flightService } from "../services/flight.service.js";
import httpStatus from "http-status";

async function bookFlight(req, res) {
    const { origin, destination, date } = req.body

    await flightService.bookFlight(origin, destination, date)
    res.sendStatus(httpStatus.CREATED)
};

async function findAllFlights(req, res) {
    const { origin, destination, ['smaller-date']: smallerDate, ['bigger-date']: biggerDate } = req.query
    const flights = await flightService.findAllFlights(origin, destination, smallerDate, biggerDate) // here

    const formattedFlights = flights.map(flight => {
        const date = dayjs(flight.date).format("DD-MM-YYYY")
        return { ...flight, date }
    })
    
    res.send(formattedFlights)
};

export const flightController = { bookFlight, findAllFlights }