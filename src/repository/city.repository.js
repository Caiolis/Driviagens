import { db } from "../configs/databaseConnection.js"

async function findByName(cityName) {
    const cities = await db.query(`SELECT * FROM cities WHERE name=$1;`, [cityName])
    return cities.rows[0]
}

async function insertCity(cityName) {
    await db.query(`INSERT INTO cities (name) VALUES ($1);`, [cityName])
}

async function findById(id) {
    const cities = await db.query(`SELECT * FROM cities WHERE id=$1;`, [id])
    return cities.rows[0]
}

export const cityRepository = { findByName, insertCity, findById }