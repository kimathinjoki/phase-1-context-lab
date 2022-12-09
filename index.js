/* Your Code Here */

function createEmployeeRecord(array){
    const eRecord = {
        firstName:`${array[0]}`,
        familyName:`${array[1]}`,
        title:`${array[2]}`,
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]

    }
    return eRecord
}

function createEmployeeRecords(data){
    const obj = []
    for(let i =0 ; i <data.length; i++){
        obj.push(createEmployeeRecord(data[i]))
    }
    return obj
}

function createTimeInEvent(date,employeeRec = createEmployeeRecord(Array) ){
    const timeInObj = {type:"TimeIn",hour:date.split(' ')[1],date:date.split(' ')[0]}
    // const  elem = createEmployeeRecord(Array)
    // elem.timeInEvents = timeInObj
    const UpElem = emplyeeRec.timeInEvents = timeInObj

    return UpElem

}

function createTimeOutEvent(date){
    const timeOutObj ={type:"TimeIn",hour:date.split(' ')[1],date:date.split(' ')[0]}
    return timeOutObj

}

function hoursWorkedOnDate(date){

    const hoursWorked = Number(createTimeOutEvent(date)) - Number(createTimeInEvent(date).hour)
    return hoursWorked

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

