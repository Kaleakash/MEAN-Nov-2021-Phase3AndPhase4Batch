let fs = require("fs");

fs.unlink("demo1.txt",(err)=> {
    if(!err){
        console.log("file deleted successfully")
    }else {
        console.log("file not present")
    }
})