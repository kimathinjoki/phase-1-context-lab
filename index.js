/* Your Code Here */

const createEmployeeRecord = function(array){
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

function createTimeInEvent(date){
    // const timeInObj = {
    //     type:"TimeIn",
    //     hour:+(date.split(" ")[1]),
    //     date:(date.split(" "))[0]
    // };

    const timeStamp = date.split(" ")

    const timeInObj = {
        type:"TimeIn",
        hour:+timeStamp[1],
        date:timeStamp[0]
    };

    this.timeInEvents.push(timeInObj);
    return this
}


function createTimeOutEvent(date){
    const spliting = date.split(" ")


    const timeOutObj ={type:"TimeOut",
        hour: +spliting[1],
        date:spliting[0]
    }

    this.timeOutEvents.push(timeOutObj)
    return this



}

function hoursWorkedOnDate(date){


    // const hoursWorked = Number(createTimeOutEvent(date)) - Number(createTimeInEvent(date).hour)
    // return hoursWorked

    const timeIn = this.timeInEvents.find(obj => obj.date===date)
    const timeOut = this.timeOutEvents.find(obj=> obj.date===date)

    return (timeOut.hour-timeIn.hour)/100


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



function wagesEarnedOnDate(date){

    // const timeIn = this.timeInEvents.find(obj => obj.date===date)
    // const timeOut = this.timeOutEvents.find(obj=> obj.date===date)

    // const hoursWorked =(timeOut.hour-timeIn.hour)/100

    // return hoursWorked*(this.payPerHour)

    return hoursWorkedOnDate.call(this,date)*(this.payPerHour)

}


// function allWagesFor(employee){
//     let wages = 0;
//     wages = employee.timeOutEvents.reduce((acc,item)=>{
//         const theDate = item.date;
//         return (acc+ wagesEarnedOnDate(employee,theDate));
//     },0)
//     return wages;
// }

function findEmployeeByFirstName(coll,firstNameStr){
    return coll.find(item =>item.firstName ===firstNameStr)
}

function calculatePayroll(employees){
    return employees.reduce((acc,item)=>acc+allWagesFor.call(item),0);
}