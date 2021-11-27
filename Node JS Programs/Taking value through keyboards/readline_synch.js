let readline = require("readline-sync");
var id = readline.questionInt("Enter the id")
var name = readline.question("Enter the name");
var salary = readline.questionFloat("Enter the salary")

console.log("Your id is "+id)
console.log("Your name "+name);
console.log("Your salary is "+salary);