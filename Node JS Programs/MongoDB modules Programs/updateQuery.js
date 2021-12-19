let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,(err,result)=> {
    if(!err){        
        let db = result.db("meanbatch1");
        // Update Operation 
        db.collection("EmployeeDetails").updateOne({_id:2},{$set:{salary:38000}},(err,res)=> {
            if(!err){
                    //console.log(res);
                    if(res.matchedCount>0 && res.modifiedCount>0){
                            console.log("Record updated successfully")
                    }else {
                            console.log("Record didn't update")
                    }
            }else {
                console.log(err);
            }
            result.close();
        })   
    } 
})