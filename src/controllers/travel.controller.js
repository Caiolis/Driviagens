import httpStatus from "http-status";
import { travelService } from "../services/travel.service.js";

async function bookTravel(req, res) {
    const { passengerId, flightId } = req.body

    await travelService.bookTravel(passengerId, flightId)
    res.sendStatus(httpStatus.CREATED)
};

export const travelController = { bookTravel };