// Your code here
// firstName, familyName, title, payRatePerHour
let timeInEvents = []
let timeOutEvents = []
let recordObj;
const createEmployeeRecord = (record) =>{
     recordObj = {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []

    }
    // console.log(recordObj.title)
    return recordObj
}
// console.log(createEmployeeRecord(['Patricia', 'njoroge', 'Ms', 1000]))
const createEmployeeRecords = (records) => {
    return records.map(record => {
      return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: record[4],
        timeOutEvents: record[5]
      }
    })
  }
// console.log(createEmployeeRecords([['Patricia', 'njoroge', 'Ms', 1000],['Pat', 'njo', 'Miss', 2000],['Pat', 'njo', 'Miss', 2000]]))
const createTimeInEvent =(employeeRecord,date)=>{
    let reg = /[\W]/g
    let day = date.split(' ')[0]
    let time = parseInt(date.split(' ')[1].replace(reg, ''))
   
    let updateEmployeeRec ={
        type: "TimeIn",
        hour: time,
        date: day
    }
    // employeeRecord = employeeRecord.timeInEvents.push(updateEmployeeRec)
    // console.log(createEmployeeRecord(employeeRecord).timeInEvents.push(updateEmployeeRec))
    employeeRecord = createEmployeeRecord(employeeRecord).timeInEvents.push(updateEmployeeRec)
    
 return recordObj

}
//  console.log(createTimeInEvent(['Patricia', 'njoroge', 'Ms', 1000] , '1997-02-24 1800)'))
const createTimeOutEvent = (employeeRecord,date) =>{
    let reg = /[\W]/g
    let day = date.split(' ')[0]
    let time = parseInt(date.split(' ')[1].replace(reg, ''))
   
    let updateEmployeeRec ={
        type: "TimeOut",
        hour: time,
        date: day
    }
    employeeRecord = createEmployeeRecord(employeeRecord).timeOutEvents.push(updateEmployeeRec)
    
 return recordObj
}
//  console.log(createTimeOutEvent(['Patricia', 'njoroge', 'Ms', 1000] , '1997-02-24 2400)'))

const hoursWorkedOnDate =(employeeRecord, day)=>{
    // console.log(createTimeOutEvent(employeeRecord, timeOut).timeOutEvents[0].hour)
   let hoursWorked = (createTimeOutEvent(employeeRecord,timeOut).timeOutEvents[0].hour) - (createTimeInEvent(employeeRecord,timeIn).timeInEvents[0].hour)
  
return hoursWorked
}
// console.log(hoursWorkedOnDate(['Patricia', 'njoroge', 'Ms', 1000] , '1997-02-24'))
const calculatePayroll =()=>{

}