let fs = require("fs");
fs.readFile("emp.json",(err,data)=> {
    if(!err){
        //console.log(data)           // buffer format 
        //console.log(data.toString())    // converting buffer to string format.
        //let emp = data.toString();      // string format 
        //let emp = JSON.parse(data.toString());    // converting string to json 
        let emp = JSON.parse(data);                 //converting buffer to json 
        //let emp = data.toJSON();
        console.log("id is "+emp.id)
        console.log("name is "+emp.name);
        console.log("age is "+emp.age); 
    }else {
        console.log(err)
    }
})