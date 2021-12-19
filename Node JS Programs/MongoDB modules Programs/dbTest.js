// loading the module and creating the reference of that module
let  obj = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

obj.connect(url,(err,result)=> {
        if(!err){
            console.log("Connected successfully")
            let db = result.db("meanbatch1");
                // do coding 

               //result.close();
        }else {
            console.log(err);
        }

        result.close();
})