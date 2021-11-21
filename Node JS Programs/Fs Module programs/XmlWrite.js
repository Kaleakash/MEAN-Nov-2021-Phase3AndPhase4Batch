let fs = require("fs");
let id = 100;
let name = "Raj";
let salary = 12000;
let employees = `
            <Employee>
            <Id>${id}</Id>
            <Name>${name}</Name>
            <Salary>${salary}</Salary>
            </Employee>
`
// let info = "Welcome "
// +"to Node JS "
//fs.writeFileSync("emp.xml",employees);
//console.log("Data Stored in XML file")
var data = fs.readFileSync("emp.xml");
console.log(data.toString())