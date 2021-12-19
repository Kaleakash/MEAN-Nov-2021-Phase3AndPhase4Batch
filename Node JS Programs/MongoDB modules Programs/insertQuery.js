let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,(err,result)=> {
    if(!err){
        
        let db = result.db("meanbatch1");
        // Insert Operation 
    let emp = {_id:15, name:"Mahesh",salary:48000,deptId:102,city:"MUmbai"}
        db.collection("EmployeeDetails").insertOne(emp,(err,res)=> {
            if(!err){
                console.log("Record inserted...");
                console.log(res);
            }else {
                console.log(err)
            }

            result.close();

        })
    }
    
})