// load the module 
let fs = require("fs");
fs.readFile("demo1.txt",(err,data)=> {
    if(!err){
        //console.log(data);  // display the data in buffer format 
        console.log(data.toString()) // convert bufferc to String format. 
    }else {
        console.log(err);
    }
})