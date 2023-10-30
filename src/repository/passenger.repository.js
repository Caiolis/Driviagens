import { db } from "../configs/databaseConnection.js"

async function insertPassengerDb(firstName, lastName) {
    await db.query(
        `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
        [firstName, lastName]
    )
}

async function searchTravelsIntoDb(name) {
    const array = []
    let query = `
        SELECT CONCAT(p."firstName", ' ', p."lastName") AS "name", COUNT(t."passengerId") AS travels
            FROM passengers p
            LEFT JOIN travels t ON t."passengerId" = p.id
            WHERE 1=1
    `
    if (name) {
        array.push(`%${name}%`)
        query += `AND CONCAT(p."firstName", ' ', p."lastName") ILIKE $1 `
    }

    query += "GROUP BY p.id ORDER BY travels DESC;"

    const result = await db.query(query, array)
    return result.rows
}

export const passengerRepositoryFunctions = { insertPassengerDb }