let http = require("http");
//ES5 style 
// let server = http.createServer(function(req,res) {

// })
//ES6 style arrow style 
// http://localhost:9090        client send 
let server = http.createServer((req,res)=> {
    console.log("Welcome to Web Application")
    res.end("Welcome to Simple Web Application")
});

server.listen(9191,()=>console.log("server running on port number 9090"))

