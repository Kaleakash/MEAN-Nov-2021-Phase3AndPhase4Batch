// load the modules 
let express = require("express");
let obj = require("mongodb").MongoClient;
// create the referene of express modules 
let app = express();
// mongo db database URL 
let url  ="mongodb://localhost:27017";
//middleware 
app.use(express.json());            // Enable the data from request body part
obj.connect(url,(err,result)=> {
    if(!err){
        let db = result.db("meanbatch1");
        // Get Method 
        app.get("/employeeInfo",async (req,res)=> {
            let cursor = await db.collection("EmployeeDetails").find({});
            let employees = await cursor.toArray();       // convert to array and store in employee
            res.json(employees)             
        })

        //Post method 
        app.post("/storeEmployeeInfo",(req,res)=> {
            let emp = req.body;
            db.collection("EmployeeDetails").insertOne(emp,(err,info)=> {
                if(!err){
                            res.json(info);
                }else {
                        res.json(err);
                }
            })
        })
    }
})
app.listen(9090,()=>console.log("Server running on port number 9090"));