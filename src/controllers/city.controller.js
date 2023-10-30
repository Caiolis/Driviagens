import httpStatus from "http-status"
import { cityService } from "../services/city.service.js"

async function createCity(req, res) {
    const { name } = req.body

    await cityService.createCity(name)
    res.sendStatus(httpStatus.CREATED)
}

export const cityController = { createCity }