let express = require("express");

let app = express();


// we have to add the middleware to receive the value from body part 
app.use(express.json());        // enable json data from body part. 

let emp = {id:100,name:"Ravi",age:21};      // literal style object creation in JS
let empXml = `
        <Employee>
                <Emp>
                    <Id>100</Id>
                    <Name>Ravi</Name>
                    <Salary>12000</Salary>
                </Emp>
        </Employee>
`
let employees =[
    {id:100,name:"Ajay",age:21},
    {id:101,name:"Vijay",age:24},
    {id:102,name:"Ramesh",age:23},
    {id:103,name:"Raju",age:29},
    {id:104,name:"Balaji",age:30}
]

// Text format 
app.get("/sayHello",(req,res)=> {
    res.send("Welcome to Simple RestFull Web Service");
})

// json format for one employee  
app.get("/empInfoInJson",(req,res)=> {
    res.json(emp);          // automatically convert js object into json format. 
    //res.send(emp);          // text consider. 
})
//xml format 
app.get("/empInfoInXml",(req,res)=> {
    res.set("Content-Type","application/xml");
    //res.send(o2x(emp));
    res.send(empXml);
})

// all employee details in json format
// http://localhost:9090/employees

app.get("/employees",(req,res)=> {
    res.json(employees);
})

// http://localhost:9090/singleQueryParam?name=RajDeep
app.get("/singleQueryParam",(req,res)=> {
    //let user = req.query.name;
    let user = req.query["name"];
    res.send("Welome to my simple web application "+user);
})

// http://localhost:9090/multiQueryParam?user=Raj&pass=123
app.get("/multiQueryParam",(req,res)=> {
    let user = req.query["user"];
    let pass = req.query["pass"];
    if(user==="Raj" && pass==="123"){
            res.json({"msg":"Successfully login"})
    }else {
        res.json({"msg":"Failure try once again"})

    }
})

// http://localhost:9090/singlePathParam/Raj
app.get("/singlePathParam/:user",(req,res)=> {
    let name = req.params.user;
    res.send("Welcome to path param "+name);
})

// http://localhost:9090/multipathparam/Raj/123
app.get("/multipathparam/:user/:pass",(req,res)=> {
    let user = req.params.user;
    let pass = req.params.pass;
    if(user==="Raj" && pass==="123"){
            res.json({"msg":"Successfully login"})
    }else {
        res.json({"msg":"Failure try once again"})

    }
})

// http://localhost:9090/simplePost
app.post("/simplePost",(req,res)=> {
    res.send("Welcome to simple post method");
})

// http://localhost:9090/storeEmployeeInfo
// if method is post data will send through body part
app.post("/storeEmployeeInfo",(req,res)=> {
    let emp = req.body; 
    console.log(emp);           // store this information in array or file or db
    res.send("Post method with data received");
})


// http://localhost:9090/updateEmployeeDetails

app.put("/updateEmployeeDetails",(req,res)=> {
    let emp = req.body;
    emp.age = emp.age+2;        // This information we can update. 
    res.json(emp);
})


//  http://localhost:9090/deleteEmployeeInfo/100
app.delete("/deleteEmployeeInfo/:id",(req,res)=> {
    let empId = req.params.id;          // take empId and search in array or file or db to delete. 
    res.send("Your record deleted successfully with id as "+empId);
})


app.listen(9090,()=>console.log("Server running on port number 9090"));
