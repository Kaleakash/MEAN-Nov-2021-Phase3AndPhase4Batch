let url = require("url");
let urlInfo = "http://www.google.com:80/home?id=100&name=Raj";
console.log(urlInfo);
let urlRef = url.parse(urlInfo,true);        // converting string to url reference. 
//console.log(urlRef)
console.log(urlRef.protocol)
console.log(urlRef.hostname)
console.log(urlRef.port)
console.log(urlRef.pathname)
console.log(urlRef.query)
let user = urlRef.query;        // query consider as a reference. 
// console.log(user)
console.log("id is "+user.id)
console.log("name is "+user.name)