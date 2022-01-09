let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let client = net.createConnection(8181,()=> {
    // This message display on client machine 
    console.log("client send the request to server")

    // Client want to send the data to server only one time. 
    client.write(" I am' Client");
})

// This code is uses to receive the message from the server 
client.on("data",(msg)=> {
    console.log(msg.toString())
})
// it will call again and again when we hit enter key on client terminal 
r1.on("line",(input)=> {
    client.write(`From Client : ${input}`);
})