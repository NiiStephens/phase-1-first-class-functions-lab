// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) =>{
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2, );

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (number) =>{
    return function(){
        return number * number;
    }
}

const fareDoubler = (fares) => {
    return fares * 2;
}

const fareTripler = (fares) => {
    return fares * 3;
}
function selectDifferentDrivers (drivers, selectingDrivers){
    if (selectingDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else{
        return returnLastTwoDrivers(drivers);
    }
}







































    // returnFirstTwoDrivers(arrayOfDrivers) : returnLastTwoDrivers(arrayOfDrivers);
    // return select;
