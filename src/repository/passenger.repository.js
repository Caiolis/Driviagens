import { db } from "../configs/databaseConnection.js"

async function insertPassengerDb(firstName, lastName) {
    await db.query(
        `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
        [firstName, lastName]
    )
}

export const passengerRepositoryFunctions = { insertPassengerDb }