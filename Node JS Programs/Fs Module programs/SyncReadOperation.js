let fs = require("fs");

try{
let data = fs.readFileSync("demo.txt");
//console.log(data);
console.log(data.toString())    // converting buffer to string format 
console.log("Data loaded successfully");
}catch(exp){
    console.log("Error generated")
    //console.log(exp)
}
console.log("Finish")
console.log("Finish")
console.log("Finish")