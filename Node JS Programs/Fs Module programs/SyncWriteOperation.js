let fs = require("fs");
let message = "Welcome to Simple Write Synchronous operation";
fs.writeFileSync("demo2.txt",message,{flag:"a+"});
console.log("Data Stored successully");
console.log("Finish");