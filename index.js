// Code your solution in this file!

function returnFirstTwoDrivers(){//returnFirstTwoDrivers() anonymous
    const group = ["Sally", "Bob", "Freddy", "Claudia"]
    return group.slice(0, 2)
}

function returnLastTwoDrivers(){
    const group2 = ["Sally", "Bob", "Freddy", "Claudia"]
    return group2.slice(-2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier= (integer)=>{
    return integer=> (integer*5)
}

function fareDoubler(price){
    const double=createFareMultiplier(price)(4)
    return double
}

function fareTripler(price){
    const triple=createFareMultiplier(price)(7.2)
    return triple
}

const selectDifferentDrivers=(drivers, returnFirstTwoDrivers)=>returnFirstTwoDrivers(drivers.slice(0,2))