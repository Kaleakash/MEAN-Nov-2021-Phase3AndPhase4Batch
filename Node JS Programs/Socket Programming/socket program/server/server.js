let net = require("net");
let server = net.createServer();
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// This code execute only if any client send the request to this application using 
// port number 8181
server.on("connection",(socket)=> {
        console.log("Client connected...")

        // this event or function is use to receive the value from client machine 
        socket.on("data",(msg)=> {
            console.log(msg.toString())
        })

        // this code is use to send the data to client application 
        socket.write("Hello Client, You successfully connected this application")

        // This code is use to send data again and again from server to client
        r1.on("line",(input)=> {
            socket.write(`From Server : ${input}`);
        })
})




server.listen(8181,()=>console.log("Server running on port number 8181"));