import { db } from "../database/database.connection.js";

async function insertTravelIntoDb(passengerId, flightId) {
    await db.query(
        `INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`,
        [passengerId, flightId]
    )
}

export const travelRepository = { insertTravelIntoDb }