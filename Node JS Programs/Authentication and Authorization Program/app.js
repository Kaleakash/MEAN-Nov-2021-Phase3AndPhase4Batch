let express = require("express");
let mongoose = require("mongoose");
let userRouter = require("./router/user.router");

let url = "mongodb://localhost:27017/meanbatch1";
mongoose.connect(url).then(res=>console.log("connected")).catch(e=>console.log(e));

let app = express();

app.use(express.json());

app.use("/api/user",userRouter);


app.listen(9090,()=>console.log("app running on port number 9090"))