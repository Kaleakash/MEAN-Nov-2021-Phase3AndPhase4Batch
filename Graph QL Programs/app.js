let express = require("express");
let  {buildSchema}    = require("graphql")        // This module provide 
                                        // pre-defined property ie GraphQLSchema which 
                                        // help to defined the schema for response data. 
let  {graphqlHTTP}    = require("express-graphql"); // This module bind with express module 

// Schema definition for response or structure for the reponse 

let mySchema = buildSchema(`
    type Query {
        hello:String 
        id:Int
        salary:Float
        getEmployee:Employee 
        getAllEmployee:[Employee]
        findEmployee(id:Int):Employee
    },
    type Employee {
        id:Int
        name:String 
        age:Int
        city:String 
    }
`)
let emp = {id:100,name:"Ramesh",age:21,city:"Bangalore"};
let employees =[
    {id:100,name:"Ramesh",age:21,city:"Bangalore"},
    {id:101,name:"Ravi",age:24,city:"Mumbai"},
    {id:102,name:"Ajay",age:28,city:"Delhi"},
    {id:103,name:"Vijay",age:32,city:"Bangalore"},
    {id:104,name:"Mahesh",age:34,city:"Hyderabad"}
]
let empInfo = ()=> {
    return emp;
}
// using schema defintion create response 
let obj = {
    hello:()=>"Welcome to Simple Graph QL Example",
    id:()=>100,
    salary:()=>12000.50,
    getEmployee:empInfo,
    getAllEmployee:()=>employees,
    findEmployee:(args)=> {
        console.log(args);
        let id = args.id;
        return employees.find(e=>e.id == id);
    }
}
// create the express reference 
let app = express();

// middleware 
// http://localhost:9090/graphql 
app.use("/graphql",graphqlHTTP({
    schema:mySchema,
    rootValue:obj,      // it reponse partial data. 
    graphiql:true
}))

app.listen(9191,()=>console.log("Server running on port number 9191"))