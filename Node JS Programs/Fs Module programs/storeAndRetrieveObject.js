let fs = require("fs");
// let employees = [];
// let emp1 = {id:100,name:"Raj",age:21};
// let emp2 = {id:101,name:"Ramesh",age:24};
// let emp3 = {id:102,name:"Rajesh",age:28};
// employees.push(emp1);
// employees.push(emp2);
// employees.push(emp3);
// Write array data 
//fs.writeFileSync("employees.json",JSON.stringify(employees));
//console.log("Employee information stored successfully");

let data = fs.readFileSync("employees.json");
let employeesInfo = JSON.parse(data);
console.log("Number of Employee are "+employeesInfo.length)
employeesInfo.forEach(emp=>console.log(emp));
let emp4 = {id:106,name:"Vijay",age:35};
employeesInfo.push(emp4);
fs.writeFileSync("employees.json",JSON.stringify(employeesInfo));
console.log("Record stored successfully");
