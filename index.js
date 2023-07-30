// Your code here
// firstName, familyName, title, payRatePerHour
let createEmployeeRecord = (record) =>{
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(records) {
    return records.map((record)=>{
        return createEmployeeRecord(record)
    })
}

let createTimeInEvent = function(employee, date){
    let reg = /[\W]/g
    let day = date.split(' ')[0]
    let time = parseInt(date.split(' ')[1].replace(reg, ''))

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: time,
        date: day
    })

    return employee
}

let createTimeOutEvent = function(employee, date){
    let reg = /[\W]/g
    let day = date.split(' ')[0]
    let time = parseInt(date.split(' ')[1].replace(reg, ''))

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: time,
        date: day
    })

    return employee
}

let hoursWorkedOnDate = function(employee, day){
    let timeIn = employee.timeInEvents.find(function(e){
        return e.date === day
    })

    let timeOut = employee.timeOutEvents.find(function(e){
        return e.date === day
    })

    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(employee, day){
    let wage = hoursWorkedOnDate(employee, day)
        * employee.payPerHour
    return parseFloat(wage.toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map((d)=>{
        return d.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}