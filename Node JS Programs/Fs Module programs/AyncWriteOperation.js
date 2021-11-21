let fs = require("fs");
let message = "Welcome to Simple File Handling Program using Node JS\n ";
function storeData(){
fs.writeFile("demo1.txt",message,{flag:"a+"},(err)=> {
    if(!err){
        console.log("Information stored in file successfully")
    }else {
        console.log(err);
    }
});
}
setTimeout(storeData,2000);
console.log("Finish")       // if this coding is asynch 
console.log("Finish")
console.log("Finish")
