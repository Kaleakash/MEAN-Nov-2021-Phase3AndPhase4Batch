let express = require("express");

let app = express();


app.get("/",(req,res)=>{
    res.send("Welcome to Simple Docker with Express ")
})

app.get("/user/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcomer user "+name+" Express JS with Docker");
})
let employees=[
    {id:100,name:"Ravi",age:21},
    {id:101,name:"Ramesh",age:22}
]
app.get("/employee",(req,res)=> {
    res.json(employees)
})
app.listen(9090,()=>console.log("Server running on port number 9090"))