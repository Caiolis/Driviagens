function wrongData() {
    return {
        type: "wrongData",
        message: `The fields are wrong!`
    }
}

function invalidFlightDate() {
    return {
        type: "wrongData",
        message: `This date has already passed.`
    }
}

function tooManyResults() {
    return {
        type: "tooManyResults",
        message: `Exceeded 10 travels limit`
    }
}

function equalCities() {
    return {
        type: "conflict",
        message: `The destination can't be equal to the origin city!`
    }
}

function invalidTravelDateAmount() {
    return {
        type: "badRequest",
        message: `Missing travel dates`
    }
}

function invalidTravelDate() {
    return {
        type: "wrongData",
        message: `bigger-date needs to be greater than smaller-date!`
    }
}

function conflict(resource = "item") {
    return {
        type: "conflict",
        message: `This ${resource} has already been added!`
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} not found!`
    }
}

export const errors = {
    notFound,
    conflict,
    wrongData,
    equalCities,
    invalidFlightDate,
    invalidTravelDate,
    invalidTravelDateAmount,
    tooManyResults
}