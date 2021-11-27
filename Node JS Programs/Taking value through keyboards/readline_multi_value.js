let readline = require("readline");
var obj = readline.createInterface({          //input and output device details. 
    input:process.stdin,
    output:process.stdout
});
obj.question("Enter the id",(id)=> {

    obj.question("Enter the name",(name)=> {

        obj.question("Enter the salary",(salary)=> {
                console.log("id is "+id);
                console.log("name is "+name)
                console.log("salary is "+salary);
                obj.close();
        })
    })
})