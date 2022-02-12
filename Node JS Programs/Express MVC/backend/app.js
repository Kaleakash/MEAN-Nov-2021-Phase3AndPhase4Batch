// load all modules 
let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let productRouter = require("./router/product.router");

// database URL 
let url = "mongodb://mongo:27017/meanbatch1";

// create the express reference 
let app = express();

// all middleware 
app.use(cors());        // enable while calling rest api through angular 
app.use(express.json()) // enable post or put request body part data 

// connect the database 
mongoose.connect(url).then(res=>console.log("Connected ")).catch(err=>console.log(err));

// match main path 
// http://localhost:9090/api/product/*
app.use("/api/product",productRouter);      // match main path
//app.use("/api/customer",customerRouter);

app.listen(9090,()=>console.log("Server running on port number 9090"));
