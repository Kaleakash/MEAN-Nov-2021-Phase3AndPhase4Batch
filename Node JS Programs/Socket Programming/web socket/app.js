// load the express module 
let express = require("express");

// create the reference of express module 
let app = express();

//we have to create the reference of express-ws module with help of express reference 
// using IIFE style 
let ws = require("express-ws")(app);

// http://localhost:9090
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

// this code execute if any client ie browser send request.
app.ws("/",(socket,req)=> {
    console.log("Client send socket request");

    // receive the message from client browser 
    socket.on("message",(msg)=> {
        console.log(msg);
    })

    // send the message to client browser 
    socket.send("Welcome client you successfully connected web socket application")
})


app.listen(9090,()=>console.log("server running on port number 9090"));