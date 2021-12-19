let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,(err,result)=> {
    if(!err){        
        let db = result.db("meanbatch1");
        // Delete Operation 
        db.collection("EmployeeDetails").deleteOne({_id:14},(err,res)=> {
            if(!err){
                   // console.log(res);
                   if(res.deletedCount>0){
                        console.log("record deleted successfully")
                   }else {
                        console.log("Record didn't delete");
                   }
            }else {
                console.log(err);
            }
            result.close();
        })
    } 
})