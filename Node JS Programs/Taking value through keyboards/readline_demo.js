// load the module 
let readline = require("readline");
var obj = readline.createInterface({          //input and output device details. 
    input:process.stdin,
    output:process.stdout
});
obj.question("Enter the name",(name)=> {
    console.log("Welcome user "+name);


 obj.close();    
})

// obj.question("Enter the salary",(salary)=> {
//     console.log("Your salary is "+salary);


//     obj.close();    
// })

// let readline = require("readline");
// var obj = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// obj.question("Enter the name", (name)=> {
//     console.log("Welcome user " +name);
//     obj.close();
// })

