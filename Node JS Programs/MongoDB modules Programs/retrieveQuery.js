let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,(err,result)=> {
    if(!err){        
        let db = result.db("meanbatch1");
        // Retrieve Operation 
        //var cursor = db.collection("EmployeeDetails").find({});   without condition 
        //var cursor = db.collection("EmployeeDetails").find({_id:2});  // with id 
        //var cursor = db.collection("EmployeeDetails").find({salary:{$gt:30000}});   // salary > 30000
        //var cursor = db.collection("EmployeeDetails").find({$and:[{salary:{$gt:30000}},{deptId:100}]}); 
        var cursor = db.collection("EmployeeDetails").find({$or:[{salary:{$gt:30000}},{deptId:100}]}); 
        cursor.forEach(rec=> {
            //console.log(rec);
            console.log("id is "+rec._id+"Name is "+rec.name+"Salary "+rec.salary," Dept Id "+rec.deptId);
            result.close();    
        })
        
    } 
})