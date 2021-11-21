let fs = require("fs");
let emp = {id:101,name:"Ajay",age:24};
fs.writeFile("emp.json",JSON.stringify(emp),{flag:"a+"},(err)=> {
    if(!err){
        console.log("Data stored successfully");
    }
})