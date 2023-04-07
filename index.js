// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}

returnFirstTwoDrivers(drivers)


const returnLastTwoDrivers = function (drivers) {
return drivers.slice(-2)
}

returnLastTwoDrivers(drivers)



const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

selectingDrivers[0]
selectingDrivers[1]

const createFareMultiplier = function (s) {
    return function () {
        return s * s
    }
}



const fareDoubler = function (x) {
    return x * 2
}

const fareTripler = function (x) {
    return x * 3
}

const selectDifferentDrivers = function (a,b) {
    if (b === returnFirstTwoDrivers ) {
        return returnFirstTwoDrivers(a)
    } else if ( b === returnLastTwoDrivers) {
        return returnLastTwoDrivers (a)
    }

}



