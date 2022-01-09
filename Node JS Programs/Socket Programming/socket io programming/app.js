let express = require("express");
let app = express();
let http = require("http").createServer(app);
// create the reference of socket io with the help of 
// http module using iife sytax 
let io = require("socket.io")(http);

// http://localhost:9090
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\index.html");
})
// this code will execute when any client send the request to 
// this application using socket.io library 
io.on("connection",(socket)=> {
    // this message dislay on server console. 
    console.log("Client connected...");

    // this code is use to receive the message from browser client 
    socket.on("obj",(msg)=> {
        console.log(msg);
        // db code using mongodb or mongoose module 
        // _id, name, chatMessage and date/time 
        //_id, raj, Hello, 12:24         
    })
    // send message to browser client 
    socket.emit("obj1","From Server: You connected socket io library successfylly")
})



http.listen(9090,()=>console.log("server running on port number 9090"));