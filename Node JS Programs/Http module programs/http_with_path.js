let http = require("http");
let url = require("url");
let indexPage =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
            <h2>Welcome to My Simple WEb Application</h2>
            <a href="aboutus">About Us</a>
            <a href="aboutus">Contact Us</a>
            <a href="login">Login Page</a>
</body>
</html>
`
let loginPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Login Page</h2>
    <form action="checkUser">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
    </form>
    <br/>
    <a href="signUp">Sign Up</a>
</body>
</html>
`
let signUp = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Account Create</h2>
    <form action="createUser">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
    </form>
</body>
</html>
`
let loginDetails = [                // we can use fs module 
    {user:"Raj",pass:"123"},
    {user:"Ravi",pass:"567"},
    {user:"Ramesh",pass:"789"},
    {user:"Ajay",pass:"1100"},
]
let server = http.createServer((req,res)=> {
    let urlRef = url.parse(req.url,true);
    // console.log(urlRef.pathname)
    // res.end("WElcome to simple Web application");
    if(urlRef.pathname != "/favicon.ico"){
        // console.log("Request send")
        // res.write("Welcome to WEb Application")
        // res.write("Welcome to WEb Application Again")
        if(urlRef.pathname =="/aboutus"){
            res.write("<html><head></head><body><h1>About Us Page</h1></body></html>")
        }else if(urlRef.pathname=="/contactus"){
            res.write("<h1>Contact Us Page</h1>")
        }else if(urlRef.pathname=="/login"){
            res.write(loginPage)
        }else if(urlRef.pathname=="/signUp"){
            res.write(signUp)
        }else if(urlRef.pathname=="/createUser"){
            let login = urlRef.query;
            loginDetails.push(login);       // store in array 
            res.write(loginPage);    
        }else if(urlRef.pathname=="/checkUser"){
            let login = urlRef.query;
            let userName = login.user;
            let password = login.pass;
            // if record present it return that records else it return undefined. 
            let result = loginDetails.find(ll=>ll.user==userName && ll.pass==password);
            if(result==undefined){
                res.write("Failure try once again!")
            }else {
                res.write("Succesfully login!")
            }
            // if(userName=="Ajay" && password=="123"){
            //     res.write("Successfully Login!")
            // }else {
            //     res.write("Failure try once again!")
            // }
            
        }else {
            res.write(indexPage);
        }
    }
    res.end();
})

server.listen(9090,()=>console.log("Server running on port number 9090"));