// load the module 

let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");

// create the reference of express module 
let app = express();

app.use(bodyParser.urlencoded({extended:true})) // it is middleware 
                                            // enable data from form post method. 
// http://localhost:9090/sayHello

app.get("/sayHello",(req,res)=> {
    res.send("Welcome to Simple Web Application");  // sending response to client 
})
app.get("/aboutus",(req,res)=> {
    res.send("About Us Page");
})
app.get("/contactus",(req,res)=> {
    res.send("Contact us page");
})
app.get("/login",(req,res)=> {
    res.send("Login page");
})
app.get("/info",(req,res)=> {
    res.send("Info Page");
})
app.get("/aboutuspage",(req,res)=> {
    res.sendFile(__dirname+"\\aboutus.html");
})
// http://localhost:9090/
app.get("/",(req,res)=> {
    //res.sendFile("index.html");
//res.sendFile("C:\\Users\\91990\\Desktop\\Mean Stack Phase 3 and Phase 4\\Repository\\Node JS Programs\\Web Application using express\\index.html");
    //res.send(__dirname);
    res.sendFile(__dirname+"\\index.html");
})

app.get("/loginGet",(req,res)=> {
    res.sendFile(__dirname+"\\loginGet.html");
})

app.get("/loginPost",(req,res)=> {
    res.sendFile(__dirname+"\\loginPost.html");
})

app.get("/checkUserForGet",(req,res)=> {
    let loginData = fs.readFileSync("login.json");  // buffer format 
    let email  = req.query.email;
    let pass =    req.query.pass;
    let loginJson = JSON.parse(loginData);      // convert to json 
    let result = loginJson.find(l=>l.email===email && l.pass===pass)
    
    if(result!= undefined){
            res.send("successfully login")
    }else {
            res.send("failure try once again");
    }
})


app.post("/checkUserForPost",(req,res)=> {
    let loginData = fs.readFileSync("login.json");
    let login = req.body;
    //console.log(login);
    //res.send("Post method called...")
    let email = login.email;
    let pass = login.pass;
    let loginJson = JSON.parse(loginData);
    let result = loginJson.find(l=>l.email===email && l.pass===pass)
    if(result!= undefined){
            res.send("successfully login")
    }else {
            res.send("failure try once again");
    }
})


app.listen(9090,()=>console.log("Server is running on port number 9090"))

